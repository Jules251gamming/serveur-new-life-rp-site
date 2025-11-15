import os
from mistralai import Mistral

# Correction 1: Utilisation correcte de la clé API
client = Mistral(api_key="ag_019a842b3bf373729f5389e2a41b5ae6")

inputs = [
    {"role": "user", "content": "Hello!"}
]

completion_args = {
    "temperature": 0.7,
    "max_tokens": 2048,
    "top_p": 1
}

tools = [
    {
        "type": "code_interpreter"
    },
    {
        "type": "image_generation"
    },
    {
        "type": "function",
        "function": {
            "name": "html",
            "description": "Generate HTML content",
            "strict": True,  # Correction 2: True au lieu de true (Python utilise True)
            "parameters": {
                "type": "object",
                "properties": {}  # Correction 3: Ajout des propriétés requises
            }
        }
    }
]

# Correction 4: Syntaxe correcte pour l'appel API
try:
    response = client.beta.chat.completions.create(
        model="mistral-medium-latest",
        messages=inputs,
        tools=tools,
        **completion_args
    )
    
    print(response.choices[0].message.content)
    
except Exception as e:
    print(f"Erreur: {e}")