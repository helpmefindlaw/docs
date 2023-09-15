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
    
    
class HelpMeFindlLawRetreivalTool(BaseTool):
    name = "helpmefindlaw"
    description = "useful tool for researching the law and doing your own analysis over raw text"
    args_schema: Type[BaseModel] = HelpMeFindLawCompletionInput
    client: HelpMeFindLawClient

    def _run(
        self, prompt: str, run_manager: Optional[CallbackManagerForToolRun] = None
    ) -> str:
        """Use the tool."""
        return self.client.retrieve(HelpMeFindLawRetrievalInput(prompt=prompt))

    async def _arun(
        self, prompt: str, run_manager: Optional[AsyncCallbackManagerForToolRun] = None
    ) -> str:
        """Use the tool asynchronously."""
        return await self.client.aretrieve(HelpMeFindLawRetrievalInput(prompt=prompt))