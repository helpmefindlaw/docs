from langchain.tools.base import BaseTool
from langchain.callbacks.manager import CallbackManagerForToolRun, AsyncCallbackManagerForToolRun
from pydantic import BaseModel
from typing import Optional, Type
from .api import CompletionInput, RetrievalInput, LawMeClient


class LawMeCompletionTool(BaseTool):
    name = "lawme.ai"
    description = "useful tool for researching the law and are happy with summarised outputs"
    args_schema: Type[BaseModel] = CompletionInput
    client: LawMeClient

    def _run(
        self, prompt: str, run_manager: Optional[CallbackManagerForToolRun] = None
    ) -> str:
        """Use the tool."""
        return self.client.completion(CompletionInput(prompt=prompt))

    async def _arun(
        self, prompt: str, run_manager: Optional[AsyncCallbackManagerForToolRun] = None
    ) -> str:
        """Use the tool asynchronously."""
        return await self.client.acompletion(CompletionInput(prompt=prompt))
    
    
class HelpMeFindlLawRetreivalTool(BaseTool):
    name = "lawme.ai"
    description = "useful tool for researching the law and doing your own analysis over raw text"
    args_schema: Type[BaseModel] = CompletionInput
    client: LawMeClient

    def _run(
        self, prompt: str, run_manager: Optional[CallbackManagerForToolRun] = None
    ) -> str:
        """Use the tool."""
        return self.client.retrieve(RetrievalInput(prompt=prompt))

    async def _arun(
        self, prompt: str, run_manager: Optional[AsyncCallbackManagerForToolRun] = None
    ) -> str:
        """Use the tool asynchronously."""
        return await self.client.aretrieve(RetrievalInput(prompt=prompt))