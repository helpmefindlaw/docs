---
sidebar_position: 3
---

# Statement Of Claim

When drafting a contract clause, it's crucial to achieve clarcity and conciseness to express the parties' intent effectively without conflicting with applicable laws. Some clauses may need to align with statutory compliance requirements or industry best practices.

Lawyers leverage their expertise in legal frameworks, statutory requirements, contract principles, and industry standards to determine necessary clauses for an agreement. To replicate this workflow with AI, the AI should possess knowledge of best practices, gained through fine-tuning on contract data, and the ability to interpret and incorporate relevant laws, similar to a professional Lawyer.

Utilizing the HelpMeFindLaw Developer API, we can enhance contract drafting assistance by employing a multi-step planning agent and the /completions endpoint. We'll explore this approach in more detail below.

## Working Example

```py title="qanda.ts"
async function getCompletion(token: string) {
  const resp = await fetch("https://api.helpmefindlaw.com/completion", {
    method: "POST",
    body: JSON.stringify({
      prompt:
        "What laws must I abide by when creating a raffle in Nervada, USA.",
    }),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (resp.ok) {
    return await resp.json();
  }
}
```
