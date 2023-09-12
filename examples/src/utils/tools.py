from langchain.tools.base import BaseTool
from pydantic import BaseModel
from typing import Optional, Type
from .api import HelpMeFindLawCompletionInput, HelpMeFindLawClient


class HelpMeFindlLawCompletionTool(BaseTool):
    name = "helpmefindlaw"
    description = "useful tool for researching the law and are happy with summarised outputs"
    args_schema: Type[BaseModel] = HelpMeFindLawCompletionInput
    token: str
    client: HelpMeFindLawClient

    def __init__(self, token: str):
        self.token = token
        self.client = HelpMeFindLawClient(token)

    def _run(
        self, query: str, run_manager: Optional[CallbackManagerForToolRun] = None
    ) -> str:
        """Use the tool."""
        return self.client.completion(query)

    async def _arun(
        self, query: str, run_manager: Optional[AsyncCallbackManagerForToolRun] = None
    ) -> str:
        """Use the tool asynchronously."""
        return await self.client.acompletion(query)
    
    
class HelpMeFindlLawRetreivalTool(BaseTool):
    name = "helpmefindlaw"
    description = "useful tool for researching the law and doing your own analysis over raw text"
    args_schema: Type[BaseModel] = HelpMeFindLawCompletionInput
    token: str
    client: HelpMeFindLawClient

    def __init__(self, token: str):
        self.token = token
        self.client = HelpMeFindLawClient(token)

    def _run(
        self, query: str, run_manager: Optional[CallbackManagerForToolRun] = None
    ) -> str:
        """Use the tool."""
        return self.client.retreival(query)

    async def _arun(
        self, query: str, run_manager: Optional[AsyncCallbackManagerForToolRun] = None
    ) -> str:
        """Use the tool asynchronously."""
        return await self.client.aretreival(query)