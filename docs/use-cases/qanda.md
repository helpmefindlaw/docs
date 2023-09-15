---
sidebar_position: 1
---

# Question and Answer

Using the `/retreival` endpoint, you can build your own legal Question and Answer with sources chain by consuming the helpmefindlaw API as a retreiver with langchain or llama index. This is usefull if you want to get access to the raw retreival functionality of our RAG pipeline, which includes the joint functionality of a vector search and knowledge graph over our custom laws dataset.

## Langchain Example

We define a custom langchain retriever like so

```py title="examples/src/utils/langchain.py"
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
```

With this retriever, it is quite straight forward to add HelpMeFindLaw into your langchain workflows. The example below builds a RetrievalQA chain from the HelpMeFindLaw retriever. This allows you to develop your own legal QandA system leveraging the data and retreival optimizations within HelpMeFindLaw.

```py title="qanda.py"
import os
from dotenv import load_dotenv
from utils.api import HelpMeFindLawClient
from utils.langchain import HelpMeFindLawRetriever
from langchain.chains import RetrievalQA
from langchain.chat_models import ChatOpenAI

client = HelpMeFindLawClient(token="******")
retriever = HelpMeFindLawRetriever(client=client)
llm = ChatOpenAI(model_name="gpt-3.5-turbo", temperature=0)
chain = RetrievalQA.from_chain_type(llm, retriever=retriever)

question = "What is the statute of limitations for a personal injury claim in California?"
result = chain({"query": question})
```
