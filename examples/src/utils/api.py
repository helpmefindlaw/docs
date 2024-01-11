import httpx
from pydantic import BaseModel

class CompletionInput(BaseModel):
    prompt: str

class RetrievalInput(BaseModel):
    prompt: str

class LawMeClient(BaseModel):
    token: str
    base_url: str = "https://api.lawme.ai"

    def _run(self, endpoint: str, body) -> str:
        """Use the tool."""
        with httpx.Client(timeout=None) as client:
            resp = client.post(f"{self.base_url}/{endpoint}",
                data=body,
                headers={
                    "Authorization": f"Bearer {self.token}"
                }
            )
            if not resp.status_code == 200:
                raise Exception(resp.text)
            return resp.json()
    
    async def _arun(self, endpoint: str, query: str) -> str:
        """Use the tool asynchronously."""
        body = query
        async with httpx.AsyncClinet(timeout=None) as client:
            resp = client.post(f"{self.base_url}/{endpoint}",
                body=body,
                headers={
                    "Authorization": f"Bearer {self.token}"
                }
            )
            if not resp.status_code == 200:
                raise Exception(resp.text)
            return resp.json()
        
    def completion(self, body: CompletionInput) -> str:
        return self._run("completion", body.model_dump_json())
    
    async def acompletion(self, body: CompletionInput) -> str:
        return await self._arun("completion", body.model_dump_json())
    
    def retrieve(self, body: RetrievalInput) -> str:
        return self._run("retrieve", body.model_dump_json())
    
    async def aretrieve(self, body: RetrievalInput) -> str:
        return await self._arun("retrieve", body.model_dump_json())