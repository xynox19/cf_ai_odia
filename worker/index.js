export default {
  async fetch(req, env) {
    const result = await env.AI.run(
      "@cf/meta/llama-3.3-70b-instruct",
      {
        messages: [{ role: "user", content: "Say hello in Odia" }]
      }
    );

    return Response.json(result);
  }
};
