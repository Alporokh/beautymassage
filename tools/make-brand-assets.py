"""Build the logo and favicon files the site uses from the designer's sources.

  Sources (assets/):  logo.png      full logo, transparent background
                      favicon.svg   the head mark as a PNG wrapped in SVG
  Writes (assets/):   logo-light.png              ivory logo for the dark footer
                      favicon.ico                 16/32/48 px
                      favicon-32.png              browser tab
                      apple-touch-icon.png        180 px, ivory background (iOS ignores transparency)
                      icon-192.png, icon-512.png  Android / web manifest

Both sources were cut out of a white background and still carry a faint white
haze in the gaps between the hair strands. clear_white() turns that haze into
real transparency: only low-saturation, light pixels are touched, so the
green strands and the grey wordmark keep their colour.

Run:  python tools/make-brand-assets.py
"""
import base64
import io
import os
import re

from PIL import Image

ROOT = os.path.join(os.path.dirname(__file__), '..')
ASSETS = os.path.join(ROOT, 'assets')
IVORY = (244, 241, 234)


def clear_white(im):
    im = im.convert('RGBA')
    px = im.load()
    for y in range(im.height):
        for x in range(im.width):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            hi, lo = max(r, g, b), min(r, g, b)
            if hi - lo > 28 or lo < 150:
                continue  # coloured or dark: part of the drawing
            # 150 -> keep, 235+ -> gone; fades the anti-aliased edge of the haze
            keep = min(1.0, max(0.0, (235 - lo) / 85))
            px[x, y] = (r, g, b, round(a * keep))
    return im


def recolour(im, rgb):
    """Every visible pixel becomes rgb; alpha is kept."""
    out = Image.new('RGBA', im.size, rgb + (0,))
    out.putalpha(im.getchannel('A'))
    return out


def square(im, pad=0.06):
    im = im.crop(im.getchannel('A').getbbox())
    side = round(max(im.size) * (1 + 2 * pad))
    sq = Image.new('RGBA', (side, side), (0, 0, 0, 0))
    sq.alpha_composite(im, ((side - im.width) // 2, (side - im.height) // 2))
    return sq


def tile(mark, size, fill=0.9):
    """The mark on a rounded ivory tile: the dark face otherwise vanishes in dark-mode tabs."""
    scale = 4  # draw large, then downsample for smooth corners
    s = size * scale
    from PIL import ImageDraw
    t = Image.new('RGBA', (s, s), (0, 0, 0, 0))
    ImageDraw.Draw(t).rounded_rectangle((0, 0, s - 1, s - 1), radius=round(s * 0.22), fill=IVORY + (255,))
    inner = round(s * fill)
    t.alpha_composite(mark.resize((inner, inner), Image.LANCZOS), ((s - inner) // 2, (s - inner) // 2))
    return t.resize((size, size), Image.LANCZOS)


def favicon_source():
    svg = open(os.path.join(ASSETS, 'favicon.svg'), encoding='utf8').read()
    data = re.search(r'base64,([^"]+)', svg).group(1)
    return Image.open(io.BytesIO(base64.b64decode(data)))


def main():
    logo = clear_white(Image.open(os.path.join(ASSETS, 'logo.png')))
    recolour(logo, IVORY).save(os.path.join(ASSETS, 'logo-light.png'), optimize=True)

    # tight crop: at tab size every pixel of margin costs legibility
    mark = square(clear_white(favicon_source()), pad=0.0)
    big = mark.resize((512, 512), Image.LANCZOS)
    big.save(os.path.join(ASSETS, 'icon-512.png'), optimize=True)
    big.resize((192, 192), Image.LANCZOS).save(os.path.join(ASSETS, 'icon-192.png'), optimize=True)
    tile(mark, 32).save(os.path.join(ASSETS, 'favicon-32.png'), optimize=True)
    t16, t48 = tile(mark, 16, fill=0.94), tile(mark, 48)
    t48.save(os.path.join(ROOT, 'favicon.ico'), sizes=[(16, 16), (32, 32), (48, 48)],
             append_images=[t16, tile(mark, 32)])

    touch = Image.new('RGBA', (180, 180), IVORY + (255,))
    inner = big.resize((150, 150), Image.LANCZOS)
    touch.alpha_composite(inner, (15, 15))
    touch.convert('RGB').save(os.path.join(ASSETS, 'apple-touch-icon.png'), optimize=True)

    for f in ['logo-light.png', 'icon-512.png', 'icon-192.png', 'favicon-32.png', 'apple-touch-icon.png']:
        print(f'  assets/{f:24} {os.path.getsize(os.path.join(ASSETS, f)) / 1024:6.1f} KB')
    print(f'  favicon.ico{"":21} {os.path.getsize(os.path.join(ROOT, "favicon.ico")) / 1024:6.1f} KB')


if __name__ == '__main__':
    main()
