from typing import List

from .api import HelpMeFindLawRetrievalInput, HelpMeFindLawClient 
from langchain.callbacks.manager import CallbackManagerForRetrieverRun
from langchain.schema import BaseRetriever, Document


class HelpMeFindLawRetriever(BaseRetriever):
    """`HelpMeFindLaw` retriever.

    It is used for the question-answering with sources with
    the `/retrieve` endpoint of HelpMeFindLaw."""

    client: HelpMeFindLawClient

    def _get_relevant_documents(
        self, query: str, *, run_manager: CallbackManagerForRetrieverRun
    ) -> List[Document]:
        """Get documents relevant for a query."""
        docs = self.client.retrieve(HelpMeFindLawRetrievalInput(prompt=query))

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