import httpx
from pydantic import BaseModel

class HelpMeFindLawCompletionInput(BaseModel):
    prompt: str


class HelpMeFindLawClient(BaseModel):
    token: str
    base_url: str = "https://api.hepmefindlaw.com"

    def _run(self, endpoint: str, body: HelpMeFindLawCompletionInput) -> str:
        """Use the tool."""
        resp = httpx.get(f"{self.base_url}/{endpoint}",
            body=body,
            headers={
                "Authorization": f"Bearer {self.token}"
            }
        )
        if not resp.ok:
            return resp.error
        return resp.json()
    
    async def _arun(self, query: str,) -> str:
        """Use the tool asynchronously."""
        body = query
        async with httpx.AsyncClinet() as client:
            resp = client.get("https://api.hepmefindlaw.com/completion",
                body=body,
                headers={
                    "Authorization": f"Bearer {self.token}"
                }
            )
            if not resp.ok:
                return resp.error
            return resp.json()
        
    def completion(self, body: HelpMeFindLawCompletionInput) -> str:
        return self._run("completion", body)
    
    async def acompletion(self, body: HelpMeFindLawCompletionInput) -> str:
        return await self._arun("completion", body)
    
    def retrieve(self, body: HelpMeFindLawCompletionInput) -> str:
        return self._run("retrieve", body)
    
    async def aretrieve(self, body: HelpMeFindLawCompletionInput) -> str:
        return await self._arun("retrieve", body)