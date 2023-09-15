import os
from langchain_experimental.plan_and_execute import PlanAndExecute, load_agent_executor, load_chat_planner
from langchain.chat_models import ChatOpenAI
from langchain.chat_models import ChatOpenAI
from utils.api import HelpMeFindLawClient
from utils.tools import HelpMeFindlLawCompletionTool
from dotenv import load_dotenv

load_dotenv()
token = os.getenv("HMFL_API_KEY")

client = HelpMeFindLawClient(token=token)
client.base_url = "http://localhost:8081"
tools = [
    HelpMeFindlLawCompletionTool(client=client),
]

model = ChatOpenAI(model_name="gpt-4", verbose=True)
planner = load_chat_planner(llm=model)
executor = load_agent_executor(llm=model, tools=tools, verbose=True)
agent = PlanAndExecute(planner=planner, executor=executor, verbose=True)

if __name__ == "__main__":
    prompt = input("Enter a prompt: ")
    output = agent({"input": prompt})
    print(output)
