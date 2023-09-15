---
sidebar_position: 2
---

# Getting Started

Get started by signing up for helpmefindlaw and creating a [Developer API key](https://helpmefindlaw.com/acounts/developer). You must have a Plus Plan subscription to access the Developer API.

## Making A Request

The Developer API can be found at https://api.helpmefindlaw.com. To make an authenticated request to the API, the Developer API key must be present is a Bearer token in the Authorization header to the API endpoint. A Typescript example of a request is provided below.

```ts title="completion.ts"
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

## Integration With Langchain

[Langchain](https://www.langchain.com/) is a framework for developing applicaitons powered by Large Langugage Models. An emerging paradigm for AI application development is the use of AI Agents. Langchain provides great off-the-shelf implementations of several emerging [agent patterns](https://docs.langchain.com/docs/components/agents/). A key feature of an Agent is the ability to select and use tools in response to user input. The AI Agent uses Large Language Models to plan the action(s) required to satisify a users reqeuest and then executes each action either as a single step or sequently as part of a complex multi-step pipeline.

The Developer API allows users to build tools for Langchain with helpmefindlaw. Adding helpmefindlaw as a tool to your agent allows an agent to conduct legal research as part of a planning action to an AI system. This opens up interesting automation possibilities for compliance tech and legal tech when used along with multi-step planning agents like [BabyAGI](https://github.com/yoheinakajima/babyagi) and [AutoGPT](https://github.com/Significant-Gravitas/Auto-GPT).

Please see some langchaing examples in oure [Use Cases](https://docs.helpmefindlaw.com/docs/use-cases)

## Next Steps?

- Read out Developer API reference [documentation](https://docs.helpmefindlaw.com/docs/reference)
- Explore some of our submitted [use cases](https://docs.helpmefindlaw.com/docs/use-cases)
