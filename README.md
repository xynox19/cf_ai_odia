# cf_ai_odia_language_tutor

An AI-powered Odia language learning application built entirely on Cloudflare’s free platform.

The app provides a chat-based Odia tutor that teaches vocabulary, grammar, pronunciation, and examples in Odia. User learning progress is persisted using Cloudflare Durable Objects, allowing stateful and personalized sessions.

---

## 🧠 Architecture Overview

**Frontend**
- Cloudflare Pages
- Simple HTML/CSS/JavaScript chat interface

**Backend**
- Cloudflare Worker for orchestration
- Workers AI (Llama 3.3) as the LLM
- Durable Objects for user memory and learning state


---

## ✨ Features

- Chat-based Odia language tutor
- Odia script + English explanations
- Follow-up questions for practice
- Persistent user memory (level, last lesson)
- Fully serverless and free-tier compatible

---

## 🚀 Running the Project Locally

### Prerequisites
- Node.js 18+
- Cloudflare account (free)
- Wrangler CLI

```bash
npm install -g wrangler
```
# Run the Worker (Backend)
```bash
cd worker
wrangler dev
```

This starts the AI backend locally.

# Run the Frontend (Pages)
```bash
cd pages
wrangler pages dev .
```

Open the local URL shown in the terminal.

# Deploying to Cloudflare (Optional)
Deploy Worker
```bash
cd worker
wrangler deploy
```
Deploy Pages
```bash
cd pages
wrangler pages deploy .
```
