// functions/api/inquiry.js
// Runs on Cloudflare Pages — token never reaches the browser.
export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const { name, contact, treatment, message, website } = await request.json();

    // Honeypot — bots fill the hidden "website" field; silently accept & drop
    if (website) return json({ ok: true });

    if (!name || !contact) {
      return json({ ok: false, error: "Missing required fields" }, 400);
    }

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
