export default async function handler(req, res) {
  const { name, answer, comment } = req.body;

  const token = "8744647737:AAEQTPHqEzFt67RC0Rrx7uJYvJj_M8cz75Q";
  const chat_id = "5748017439";

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
