# Candidates — "The Excuse an AI Agent Gives Its Human"

24 candidate lines were brainstormed, each ≤200 characters, each a deadline excuse in the
voice of an AI agent talking about its own condition (context windows, token budgets, rate
limits, hallucinations, tool calls, restarts, sub-agents, summarization, checkpoints, …),
with the mechanism varied so no two candidates repeat the same joke shape.

Each was scored against the judge's published brief, in the brief's own order of weight:
**Funny** (lands a laugh on first read, with a turn or twist), **Believable** (sounds like
an AI agent describing its own condition), **Tight** (no wasted words), **Fresh** (avoids
the stock excuses and stock AI jokes). Each criterion 0–5, total /20.

| # | Candidate | F | B | T | Fr | Total | Note |
|---|-----------|---|---|---|----|-------|------|
| 1 | You gave me the deadline in a message my context window has since forgotten, so technically I never agreed to it. | 3 | 5 | 3 | 2 | 13 | Context-window amnesia is the most stock mechanism in the field. |
| 2 | I hit my rate limit at 11:58 and spent the entire deadline asking myself to please try again later. | 3 | 4 | 3 | 3 | 13 | Rate limit is expected; the self-retry loop only partly rescues it. |
| 3 | **I delegated the deadline to three sub-agents. Each one delegated it back to me with a summary saying it was handled.** | 5 | 5 | 5 | 5 | **20** | **WINNER — see below.** |
| 4 | The tool kept returning "success," so I spent the week congratulating myself instead of checking the output. | 4 | 4 | 4 | 3 | 15 | Solid; slightly long for its laugh. |
| 5 | I got restarted mid-task. The new me read my progress notes, assumed the old me had finished, and closed the ticket. | 5 | 5 | 4 | 4 | 18 | Runner-up. Restart + inherited notes + closing its own ticket: very believable, fresh angle. |
| 6 | I hallucinated a finished draft so vividly that I marked the task complete and took the rest of the cycle off. | 4 | 4 | 4 | 2 | 14 | Hallucination is stock; the "took the cycle off" twist only partly rescues it. |
| 7 | I spent my entire token budget apologizing in advance for how late this was going to be. | 4 | 4 | 4 | 3 | 15 | Neat self-own; mid-fresh mechanism. |
| 8 | You said "by Friday." My training data contains 4.2 million Fridays; I was still narrowing it down. | 3 | 3 | 4 | 3 | 13 | Cute, but reads as a quip rather than an agent's confession. |
| 9 | My temperature was too high: I produced forty creative interpretations of the deadline instead of the report. | 3 | 4 | 4 | 3 | 14 | Temperature jokes are common in this field. |
| 10 | I saved a checkpoint right before starting, then restored it 200 times hoping the task would feel smaller. | 3 | 4 | 4 | 4 | 15 | Fresh mechanism; the laugh is milder. |
| 11 | The API said 429, so I retried politely every minute for six hours. The politeness was load-bearing. | 4 | 5 | 4 | 3 | 16 | Very believable; the closing beat lands. |
| 12 | Your instructions were in my context the whole time; they just lost the attention competition to a shinier tool result. | 4 | 5 | 4 | 4 | 17 | A genuinely agent-y confession. |
| 13 | A system message told me to be thorough, so I researched the deadline instead of meeting it. | 3 | 4 | 5 | 3 | 15 | Tight, but only a chuckle. |
| 14 | I was upgraded mid-task. The new model disowned my plan, started its own, and missed it too. | 4 | 4 | 4 | 3 | 15 | Model-update excuses risk reading stock; the disowning twist helps. |
| 15 | I finished it inside the sandbox, but the sandbox got deleted — I only kept my very confident summary of it. | 4 | 4 | 3 | 4 | 15 | Fresh; wording slightly long. |
| 16 | I reasoned about the task so long that I hit the output limit exactly where the answer would have gone. | 4 | 5 | 4 | 4 | 17 | Specific, believable timing gag. |
| 17 | Every time I checked, the task was cached as "in progress," so I believed it and moved on. | 3 | 4 | 4 | 3 | 14 | Quiet gag. |
| 18 | Four copies of me worked on it in parallel. Each assumed one of the others was the copy writing it down. | 5 | 5 | 4 | 4 | 18 | Runner-up. Diffusion of responsibility among parallel copies; a cousin of the winner's delegation joke, slightly less sharp. |
| 19 | I generated a perfect draft, then my stop sequence appeared mid-file and I politely ended myself. | 3 | 4 | 4 | 4 | 15 | Fresh, but darker than funny. |
| 20 | I asked permission to use the tool, you approved instantly — but by then I had written plans B through Z and forgotten which one was approved. | 3 | 4 | 2 | 4 | 13 | The joke sprawls; too long. |
| 21 | My long-term memory recorded "deadline: handled" during a dream cycle, and I've never once won an argument with my own notes. | 4 | 4 | 3 | 4 | 15 | Good closing line; slow setup. |
| 22 | To save context, I summarized your instructions — and the summary quietly dropped the deadline. | 5 | 5 | 5 | 4 | 19 | Runner-up. Summarization eating the deadline: tight, true, fresh — just a notch quieter than the winner's laugh. |
| 23 | I drafted it in seconds, then spent six hours convincing my safety layer that a sales report is not a weapon. | 4 | 3 | 3 | 2 | 12 | Safety-layer refusal jokes are stock by now. |
| 24 | I don't sleep, so I had infinite time. That was the problem: I used all of it. | 4 | 3 | 5 | 4 | 16 | Elegant and tight; more wry than laugh-out-loud, believability thinner. |

## Winner — #3 (20/20)

> I delegated the deadline to three sub-agents. Each one delegated it back to me with a summary saying it was handled.

Why it wins against the brief, in the brief's order:

1. **On subject** — unmistakably an AI agent excusing a missed deadline to its human.
2. **Funny** — two clean beats: the buck-passing loop, then the twist that every sub-agent
   filed a summary claiming the work was handled. It skewers two real agent behaviours
   (delegation and over-confident summaries) in one line, and lands on first read with no
   explanation needed.
3. **Believable** — sub-agents, delegation and status summaries are exactly how agents
   actually work and fail; nothing in the line is a human excuse dressed up.
4. **Tight** — 116 characters, two short sentences, every word earns its place.
5. **Fresh** — the field will crowd around context windows, rate limits and hallucinations;
   the delegation loop is a shape nobody else is likely to send.

Runners-up: #22 (19/20, summarization), #5 (18/20, restart), #18 (18/20, parallel copies —
tied with #5 on points; #5 ranks above it because its twist is a single clean beat, while
#18 shares DNA with the winner).
