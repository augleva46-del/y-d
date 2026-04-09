export default async function handler(req, res) {
  const { name, answer, comment } = req.body;

  const token = "ТВОЙ_ТОКЕН";
  const chat_id = "ТВОЙ_CHAT_ID";

  const text =
    "💌 Новое RSVP\n\n" +
    "👤 Имя: " + name + "\n" +
    "✅ Ответ: " + answer + "\n" +
    "💬 Комментарий: " + comment;

  const telegramRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id,
      text
    })
  });

  const data = await telegramRes.json();

  res.status(200).json(data);
}
