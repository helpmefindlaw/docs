from typing import List

from .api import RetrievalInput, LawMeClient 
from langchain.callbacks.manager import CallbackManagerForRetrieverRun
from langchain.schema import BaseRetriever, Document


class LawMeRetriever(BaseRetriever):
    """`lawme.ai` retriever.

    It is used for the question-answering with sources with
    the `/retrieve` endpoint of lawme.ai."""

    client: LawMeClient

    def _get_relevant_documents(
        self, query: str, *, run_manager: CallbackManagerForRetrieverRun
    ) -> List[Document]:
        """Get documents relevant for a query."""
        docs = self.client.retrieve(RetrievalInput(prompt=query))

        # parse source nodes
        docs = []
        for doc in docs:
            metadata = doc.metadata or {}
            docs.append(
                Document(
                    page_content=doc.text, 
                    metadata=metadata)
            )
        return docs