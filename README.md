# CLever
CLever is a Cover Letter Generator that uses OpenAI's GPT-3 language model to generate personalized cover letters based on user's resume and a company's job description. With *CLever*, you can quickly generate high-quality cover letters that are tailored to the job you're applying for.

## Setup
To set up CLever, follow these steps:

1. Clone the repository to your local machine:
```
git clone https://github.com/YOUR_USERNAME/CLever.git
```

2. Create a `.env` file in the root directory of the project. Add the following line to your `.env` file:
```
API_KEY=<your OpenAI secret key>
```
Replace `<your OpenAI secret key>` with your **actual OpenAI secret key**. If you don't have an OpenAI account, you can sign up for one at [https://beta.openai.com/signup/](https://beta.openai.com/signup/).

3. Install the necessary libraries and tools. Run the following commands in the root directory of the project:
```
npm init -y
npm i dotenv openai
pip install openai
pip install python-dotenv
pip install PyPDF2
pip install pymupdf
```
These commands will install the necessary libraries and tools for CLever.


## Usage
To use CLever, run the following command in the root directory of the project:
```
python source/script.py
```
or
```
npm run dev_py
```

This will start the CLever application. Follow the prompts to generate a cover letter or conduct other interactions.

## Contributing
If you'd like to contribute to CLever, please fork the repository and create a pull request. We welcome contributions of all kinds, including bug fixes, new features, and documentation improvements.



