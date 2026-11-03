const res = fetch("https://openrouter.ai/api/v1/responses", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "deepseek/deepseek-chat",
    messages: [
      { role: "system", content: "you must return ONLY valid raw json" },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.7,
  }),
});

if (!res.ok) {
  const err = await res.text();
  throw new Error(`OpenRouter API error: ${err}`);

  const data = await res.json();
}
