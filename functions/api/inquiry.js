// functions/api/inquiry.js
// Runs on Cloudflare Pages — token never reaches the browser.
export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const { name, contact, treatment, message, website, turnstile } = await request.json();

    // Honeypot — bots fill the hidden "website" field; silently accept & drop
    if (website) return json({ ok: true });

    if (!name || !contact) {
      return json({ ok: false, error: "Missing required fields" }, 400);
    }

    // Turnstile. A token is only trustworthy once Cloudflare has confirmed it,
    // so this has to happen here — the browser can claim anything.
    const captcha = await verifyTurnstile(turnstile, env, request);
    if (!captcha.ok) return json({ ok: false, error: captcha.error }, 403);

    const text =
      `📋 <b>Новая заявка — beautymassage.cz</b>\n\n` +
      `<b>👤 Имя:</b> ${esc(name)}\n` +
      `<b>📞 Контакт:</b> ${esc(contact)}\n` +
      (treatment ? `<b>💆 Процедура:</b> ${esc(treatment)}\n` : "") +
      (message   ? `<b>💬 Сообщение:</b> ${esc(message)}`    : "");

    const tg = await fetch(
      `https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: env.CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      }
    );

    if (!tg.ok) return json({ ok: false, error: "Telegram error" }, 502);
    return json({ ok: true });

  } catch (e) {
    return json({ ok: false, error: "Server error" }, 500);
  }
}

export function onRequestGet() {
  return json({ ok: false, error: "Use POST" }, 405);
}

// Cloudflare's documented "always passes" test secret. It keeps the form
// working until TURNSTILE_SECRET is set on the Pages project — but it accepts
// everything, so it is protection in name only. Set the real secret.
const TURNSTILE_TEST_SECRET = "1x0000000000000000000000000000000AA";

async function verifyTurnstile(token, env, request) {
  if (!token) return { ok: false, error: "Captcha missing" };

  const secret = env.TURNSTILE_SECRET || TURNSTILE_TEST_SECRET;

  const body = new FormData();
  body.append("secret", secret);
  body.append("response", token);
  const ip = request.headers.get("CF-Connecting-IP");
  if (ip) body.append("remoteip", ip);

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body }
    );
    const data = await res.json();
    if (data.success) return { ok: true };
    return { ok: false, error: "Captcha failed" };
  } catch (e) {
    // If the check itself cannot run we refuse rather than waving the request
    // through — an outage must not become an open relay to the Telegram bot.
    return { ok: false, error: "Captcha unavailable" };
  }
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
