export class UserMemory {
  constructor(state) {
    this.state = state;
  }

  async fetch(request) {
    const memory = await this.state.storage.get("memory") || {
      level: "beginner",
      knownWords: []
    };

    return Response.json(memory);
  }
}
