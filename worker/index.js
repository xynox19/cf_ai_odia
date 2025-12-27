export default {
  async fetch(req, env) {
    const result = await env.AI.run(
      "@cf/meta/llama-3.3-70b-instruct",
      {
        messages: [
          {
            role: "system",
            content: `
You are an Odia language tutor.
Always include:
- Odia script
- English meaning
- One example sentence
`
          },
          { role: "user", content: "Teach me a greeting" }
        ]
      }
    );

    return Response.json({ reply: result.response });
  }
};
