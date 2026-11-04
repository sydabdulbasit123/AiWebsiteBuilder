export const generateResponse = async (prompt) => {
  const API_KEY = process.env.OPENROUTER_API_KEY;

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "deepseek/deepseek-chat",
      messages: [
        { role: "system", content: "you must return ONLY valid raw json" },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`OpenRouter API error: ${err}`);
  }

  const data = await res.json();
  const response = data.choices?.[0]?.message?.content;

  if (!response) {
    throw new Error("OpenRouter returned an empty response");
  }

  return response;
};