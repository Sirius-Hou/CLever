import os
import sys
import json
openai_path = os.path.join(os.getcwd(), "node_modules", "openai", "api", "src")
sys.path.append(openai_path)

import openai

# Load environment variables from .env file
from dotenv import load_dotenv
load_dotenv()

# Get API key from environment variable
api_key = os.getenv("API_KEY")
openai.api_key = api_key

def chat_with_gpt3():
    messages = [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": input("What do you want to ask GPT-3? ")},
    ]
    
    response = openai.ChatCompletion.create(
      model="gpt-3.5-turbo",
      messages=messages
    )

    print(response['choices'][0]['message']['content'])

chat_with_gpt3()
