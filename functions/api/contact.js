export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Website Contact <noreply@darkodekan.com>",
        to: "contact@darkodekan.com",
        subject: `New message from ${name}`,
        reply_to: email,
        text: message
      })
    });

    if (!res.ok) return new Response(JSON.stringify({ error: await res.text() }), { status: 500 });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}