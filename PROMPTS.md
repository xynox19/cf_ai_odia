PROMPTS.md

This file documents the AI prompts used during the development of the project
cf_ai_odia_language_tutor.

AI-assisted coding was used as a productivity and ideation tool. All final
architecture decisions, integrations, and code organization were performed
manually and are original work.


# 1. PRODUCTION SYSTEM PROMPT (USED IN APPLICATION)


Prompt:

"You are a friendly Odia language tutor.

Your task is to help users learn the Odia language through conversation.

Always include:
- Odia script
- English meaning
- Simple explanation suitable for beginners
- One short example sentence in Odia
- A follow-up question to encourage practice

Assume the user is a beginner unless stated otherwise.
Keep responses clear, concise, and encouraging."

This prompt is used in the Cloudflare Worker when calling Workers AI
(Llama 3.3) to ensure consistent and educational responses.


# 2. DEVELOPMENT & DESIGN ASSISTANCE PROMPTS


The following prompts were used during development to brainstorm and
refine the application architecture and implementation approach:

Prompt:
"Design an AI-powered language learning application using Cloudflare
Workers AI, Durable Objects, and Cloudflare Pages."

Prompt:
"How can Durable Objects be used to store per-user learning state such
as progress, known vocabulary, and last lesson?"

Prompt:
"Create a simple chat-based frontend using HTML, CSS, and JavaScript
that communicates with a Cloudflare Worker API."

Prompt:
"What is a clean way to orchestrate user input, LLM calls, and memory
storage inside a Cloudflare Worker?"


# 3. CODING ASSISTANCE PROMPTS

The following prompts were used to speed up boilerplate generation and
validate syntax during development:

Prompt:
"Provide a minimal example of a Cloudflare Worker that calls Workers AI
using the Llama 3.3 instruct model."

Prompt:
"Show an example Durable Object implementation for storing JSON state."

# 4. DOCUMENTATION ASSISTANCE PROMPTS

Prompt:
"Write clear instructions for running a Cloudflare Worker and Pages
project locally using Wrangler."

Prompt:
"Explain how Workers AI, Durable Objects, and Pages work together in a
single application."


# DISCLAIMER

AI tools were used to slightly assist with ideation, boilerplate generation, and
documentation drafting. Most information gathered was from the Workers tutorial provided by Cloudflare at 'https://job-boards.greenhouse.io/cloudflare/jobs/7296923?gh_jid=7296923' The final application design, code integration,
prompt selection, and system architecture are original work created
specifically for this submission.
