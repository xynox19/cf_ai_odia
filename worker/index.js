import { UserMemory } from "./memory";

export default {
  async fetch(req, env) {
    const { message, userId } = await req.json();

    const id = env.USER_MEMORY.idFromName(userId);
    const memoryStub = env.USER_MEMORY.get(id);

    const memoryRes = await memoryStub.fetch("https://memory/");
    const memory = await memoryRes.json();

    const ai = await env.AI.run(
      "@cf/meta/llama-3.3-70b-instruct",
      {
        messages: [
          {
            role: "system",
            content: `User level: ${memory.level}`
          },
          { role: "user", content: message }
        ]
      }
    );

    await memoryStub.fetch("https://memory/save", {
      method: "POST",
      body: JSON.stringify(memory)
    });

    return Response.json({ reply: ai.response });
  }
};

export { UserMemory };
