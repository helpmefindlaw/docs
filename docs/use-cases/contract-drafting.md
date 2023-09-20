---
sidebar_position: 2
---

# Contract Drafting

When drafting a contract clause, it's crucial to achieve clarity and conciseness to express the parties' intent effectively without conflicting with applicable laws. Some clauses may need to align with statutory compliance requirements or industry best practices.

Lawyers leverage their expertise in legal frameworks, statutory requirements, contract principles, and industry standards to determine necessary clauses for an agreement. To replicate this workflow with AI, the AI should possess knowledge of best practices, gained through fine-tuning on contract data, and the ability to interpret and incorporate relevant laws, similar to a professional Lawyer.

Utilizing the HelpMeFindLaw Developer API, we can enhance contract drafting assistance by employing a multi-step planning agent and the /completions endpoint. We'll explore this approach in more detail below.

## Create The HelpMeFindLaw Tool

We build a Langchain Tool over the `/completion` endpoint so that our Langchain Agents can consume the summarised responses to our questions about law as a step in its reasoning process.

```py title="examples/src/utils/tools.py"
from langchain.tools.base import BaseTool
from langchain.callbacks.manager import CallbackManagerForToolRun, AsyncCallbackManagerForToolRun
from pydantic import BaseModel
from typing import Optional, Type
from .api import HelpMeFindLawCompletionInput, HelpMeFindLawRetrievalInput, HelpMeFindLawClient


class HelpMeFindlLawCompletionTool(BaseTool):
    name = "helpmefindlaw"
    description = "useful tool for researching the law and are happy with summarised outputs"
    args_schema: Type[BaseModel] = HelpMeFindLawCompletionInput
    client: HelpMeFindLawClient

    def _run(
        self, prompt: str, run_manager: Optional[CallbackManagerForToolRun] = None
    ) -> str:
        """Use the tool."""
        return self.client.completion(HelpMeFindLawCompletionInput(prompt=prompt))

    async def _arun(
        self, prompt: str, run_manager: Optional[AsyncCallbackManagerForToolRun] = None
    ) -> str:
        """Use the tool asynchronously."""
        return await self.client.acompletion(HelpMeFindLawCompletionInput(prompt=prompt))
```

## Plan-and-Execute Agent

With the tool constructed, we can easily interact with agents built with under the Langchain API. An interesting example for contract drafting is the Plan-and-Execute Agent. This agent will plan the necessary steps it needs to take to complete the action defined in the prompt and then will execute each step sequentially.

```py
import os
from langchain_experimental.plan_and_execute import PlanAndExecute, load_agent_executor, load_chat_planner
from langchain.chat_models import ChatOpenAI
from langchain.chat_models import ChatOpenAI
from utils.api import HelpMeFindLawClient
from utils.tools import HelpMeFindlLawCompletionTool

client = HelpMeFindLawClient(token=token)
tools = [
    HelpMeFindlLawCompletionTool(client=client),
]
model = ChatOpenAI(model_name="gpt-4", verbose=True)
planner = load_chat_planner(llm=model)
executor = load_agent_executor(llm=model, tools=tools, verbose=True)
agent = PlanAndExecute(planner=planner, executor=executor, verbose=True)

agent({"input": "Draft a non-compete clause in an employment agreement for a consulting firm in Australia." })
```

For example, given a prompt:

`Draft a non-compete clause in an employment agreement for a consulting firm in Australia.`

The agent defined the following steps:

1. Research the specifics of non-compete clauses in Australia, including permissible terms and conditions.
2. Identify the key elements to be included in the clause, such as the scope, duration, and geographical area of the non-compete.
3. Draft the non-compete clause, ensuring it is fair to both the employer and employee, and within the legal limits set by Australian employment law.
4. Review the clause to ensure it is clear, concise, and understandable.
5. Finalize the clause.
6. Given the above steps taken, draft a non-compete clause in an employment agreement for a consulting firm in Australia.

For items 1, the agent was able to use the `HelpMeFindLawCompletionTool` to research the applicable laws through searching the legal database of HelpMeFindLaw. It was then able to build on this research with 2-6 draft and review a clause in answer to the provided prompt.

We could improve this workflow by adding an LLM fine-tunned on contract drafting as for Step 3.

Please find below an example video of this workflow with an [demo app](https://github.com/helpmefindlaw/docs/blob/main/examples/src/contract-drafting.py)

<div >
  <iframe allow="autoplay;" allowfullscreen src="https://clipchamp.com/watch/hbP9XfLnukN/embed" width="640" height="360"></iframe>
</div>
