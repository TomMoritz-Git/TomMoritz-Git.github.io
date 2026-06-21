---
title: 'Building reliable LLM systems: notes from production'
description: >-
  Lessons on evaluation, guardrails, and observability when moving a generative
  AI feature from a demo to something you can put in front of real users.
pubDate: 2026-06-15
tags: ['LLMs', 'production', 'evals']
github: https://github.com/TomMoritz-Git
---

A demo that works once is easy. A generative AI system that works on the
ten-thousandth request — for inputs you never imagined — is a different kind of
engineering problem. This post collects a few things I keep coming back to when
taking LLM features to production.

## Start with evaluation, not the model

It's tempting to begin by picking a model and prompt-tuning until the outputs
"look good." That feedback loop doesn't scale and it doesn't survive contact
with real traffic. Instead, I start by writing down what *good* means as a set
of examples:

- A small, hand-curated set of inputs that represent the real distribution.
- For each, a notion of what a correct or acceptable answer looks like.
- A grader — sometimes exact-match, sometimes a rubric scored by another model.

Once that harness exists, every prompt change, model swap, or retrieval tweak
becomes a measurable experiment rather than a vibe.

> The single highest-leverage thing you can build early is the eval, not the
> feature.

## Treat the prompt as an interface, not a spell

Prompts drift. People paste in clever phrasings, copy patterns from blog posts,
and accumulate instructions nobody remembers the reason for. I find it helps to
treat the prompt like any other interface:

```python
def build_prompt(question: str, context: list[str]) -> str:
    sources = "\n\n".join(f"[{i}] {c}" for i, c in enumerate(context))
    return PROMPT_TEMPLATE.format(question=question, sources=sources)
```

Version it, test it, and keep the structural parts (formatting, citations,
tool definitions) separate from the task-specific parts.

## Make failures observable

In production, the interesting question is rarely "what's the average quality?"
It's "what happened on the requests that went wrong?" Log enough to reconstruct
a request end to end: the inputs, the retrieved context, the raw model output,
and the post-processing. When something looks off, you want to replay it, not
guess.

## Closing thought

Most of the hard parts of generative AI engineering aren't about the model at
all. They're the same disciplines as the rest of software — measurement,
interfaces, observability — applied to a component that happens to be
probabilistic. That reframing is most of the battle.
