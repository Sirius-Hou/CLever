import os
import sys
import openai
import json
from dotenv import load_dotenv
load_dotenv()

openai.api_key = os.getenv("API_KEY")

def chat_with_gpt3_once():
    messages = [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": input("What do you want to ask GPT-3? ")},
    ]
    
    response = openai.ChatCompletion.create(
      model="gpt-3.5-turbo",
      messages=messages
    )

    print(response['choices'][0]['message']['content'])


"""
chat_with_gpt3(): This function is the main function that will be used to chat with GPT-3.5 turbo.
"""
def chat_with_gpt3():
    print("Welcome to ChatGPT 3.5 turbo! Type 'exit' to quit.")

    messages = [
        {"role": "system", "content": "You are a helpful assistant."}
    ]
    while True:
        user_input = input(">>> ")
        messages.append({"role": "user", "content": user_input})

        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            stop=None,
            messages=messages
        )

        messages.append({"role": "assistant", "content": response['choices'][0]['message']['content']})
        print(response['choices'][0]['message']['content'] + "\n")

        if user_input.lower() == "exit":
            break   


"""
extract_text_from_pdf(pdf_path): This function extracts the text from a PDF file and returns it as a string.
"""
import PyPDF2

def extract_text_from_pdf(pdf_path):
    pdf_file = open(pdf_path, 'rb')
    pdf_reader = PyPDF2.PdfReader(pdf_file)
    text_content = ''

    for page in pdf_reader.pages:
        text_content += page.extract_text()

    pdf_file.close()
    return text_content


"""
extract_text_from_pdf_2(file_path): This function extracts the text from a PDF file and returns it as a string.
"""
import fitz  # this is pymupdf

def extract_text_from_pdf_2(file_path):
    doc = fitz.open(file_path)
    text = ""
    for page in doc:
        text += page.get_text()
    return text






"""
gpt-reformat(txt): This function uses GPT-3 to reformat a text
"""
def gpt_reformat(text):
    prompt = "Here is the text extracted from a pdf file. Please reformat the text WITHOUT changing any original order and wordings:\n" + text
    messages = [{"role": "user", "content": prompt}]

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    return response['choices'][0]['message']['content']


"""
generate_image(prompt): This function uses GPT-3 to generate an image based on the prompt.
"""
def generate_image(prompt):
    response = openai.Image.create(
        prompt=prompt,
        n=1,
        size="1024x1024"
    )
    image_url = response['data'][0]['url']
    return image_url

"""
generate_cover_letter(): This function uses GPT-3 to generate a cover letter based on the user's resume (stored in '../documents/RESUME.pdf')
and the job description (stored in '../documents/JOB_DESCRIPTION.txt')
"""


def generate_cover_letter():
    # extract text from resume pdf file
    pdf_path = '../documents/RESUME.pdf'
    extracted_text = extract_text_from_pdf(pdf_path)
    with open('../documents/RESUME_scanned.txt', 'w', encoding='utf-8') as f:
        f.write(extracted_text)

    # reformat the text
    extracted_text = gpt_reformat(extracted_text)
    with open('../documents/RESUME_reformated.txt', 'w', encoding='utf-8') as f:
        f.write(extracted_text)
    
    # generate cover letter
    text = "Use information in the resume and the job description below to generate a cover letter for the company:\n"
    text += "Resume:\n" + extracted_text + "\n" + "Job & Company information:\n" + open('../documents/JOB_DESCRIPTION.txt', 'r', encoding='utf-8').read()

    messages = [{"role": "user", "content": text}]
    response = openai.ChatCompletion.create(
      model="gpt-3.5-turbo",
      messages=messages
    )

    return response['choices'][0]['message']['content']




"""
task_agent(): This function controls which function to call based on the user's choice.
"""
def task_agent():
    print("Welcome to CLever! What would you like to do? ;)")

    while True:
        print("Enter the number of the task you would like to perform.")
        # Instructions for the user to choose a task
        print("1. Chat with GPT-3.5 turbo")
        print("2. Extract text from a PDF file using PyPDF2")
        print("3. Extract text from a PDF file using PyMuPDF")
        print("4. Generate an image")
        print("5. Generate a cover letter")
        print("#. Exit")
        cmd = input("\n>>> ")

        # Chat with GPT-3.5 turbo
        if cmd == "1":
            chat_with_gpt3()

        # Extract text from a PDF file using PyPDF2
        elif cmd == "2":
            pdf_path = '../documents/RESUME.pdf'
            extracted_text = extract_text_from_pdf(pdf_path)
            with open('../documents/RESUME_scanned.txt', 'w', encoding='utf-8') as f:
                f.write(extracted_text)

            extracted_text = gpt_reformat(extracted_text)
            with open('../documents/RESUME_reformated.txt', 'w', encoding='utf-8') as f:
                f.write(extracted_text)
            
            print(extracted_text)
        
        # Extract text from a PDF file using PyMuPDF
        elif cmd == "3":
            file_path = "../documents/RESUME.pdf"
            text = extract_text_from_pdf_2(file_path)
            with open('../documents/RESUME_scanned.txt', 'w', encoding='utf-8') as f:
                f.write(text)

            text = gpt_reformat(text)
            with open('../documents/RESUME_reformated.txt', 'w', encoding='utf-8') as f:
                f.write(text)
            
            print(text)

        # Generate an image
        elif cmd == "4":
            prompt = input("Please enter a prompt to generate an image: \n")
            image_url = generate_image(prompt)
            print(image_url)

        # Generate a cover letter
        elif cmd == "5":
            cover_letter = generate_cover_letter()
            with open('../documents/COVER_LETTER.txt', 'w') as f:
                f.write(cover_letter)
            print(cover_letter + "\n")

        
        
        # Exit
        elif cmd == "#":
            sys.exit()
        else:
            print("Invalid input. Please try again.")
            


task_agent()






