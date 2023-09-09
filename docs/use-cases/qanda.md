---
sidebar_position: 1
---

# Question and Answer

Using the /retreival endpoint, you can build your own legal Question and Answer with sources chain by consuming the helpmefindlaw API as a retreiver with langchain or llama index. This is usefull if you want to get access to the raw retreival functionality of our RAG pipeline, which includes the joint functionality of a vector search and knowledge graph over our custom laws dataset.

## Langchain Example

Release a version 1.0 of your project:

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
