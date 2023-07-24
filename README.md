# WizAIrd 🧙‍♂️
Welcome to WizAIrd! The ultimate SaaS AI generator that brings magic to your fingertips. ✨
The app is deployed and can be accessed at [https://ai-generator-saa-s.vercel.app/](https://ai-generator-saa-s.vercel.app/).

## Overview
WizAIrd is a powerful platform that harnesses the capabilities of artificial intelligence to generate a wide range of creative content. Whether you need to create engaging conversations, brilliant code, stunning images, mesmerizing videos, or captivating audio, WizAIrd has got you covered! 🚀

## Features
Conversations 🗣️: Generate realistic and interactive conversations that mimic human-like interactions, thanks to the OpenAI API.

Code 💻: Seamlessly create code snippets and even entire codebases to save time and effort, all powered by the OpenAI API.

Images 🖼️: Unlock the potential of AI to produce stunning and imaginative images using the OpenAI API.

Video 🎥: Dive into the world of AI-generated videos that will leave your audience amazed, crafted with the help of replicate AI.

Audio 🎵: Embrace the enchanting AI-generated audio, perfect for background music, sound effects, and more, brought to life by replicate AI.

## Tech Stack
WizAIrd is built using the latest technologies and frameworks to ensure a seamless user experience. The core components include:

Typescript: A powerful and typed superset of JavaScript that ensures robustness and maintainability.

React: A popular front-end library for building interactive user interfaces.

Next.js 13: The latest version of Next.js, providing server-side rendering and a delightful developer experience.

TailwindCSS: A utility-first CSS framework for creating stunning designs with minimal effort.

Stripe: A secure and reliable payment platform, ensuring smooth and hassle-free transactions for our users.

Clerk: A robust authentication system that ensures the security of user data and simplifies the login and registration process.

Crisp: An efficient customer support platform to assist our users promptly and effectively.

MySQL: A powerful and widely-used relational database for storing and managing application data.

Prisma: A modern and intuitive ORM (Object-Relational Mapping) tool that streamlines database interactions.

## How it works
To get started with WizAIrd, follow these simple steps:

Sign Up or Log In: Create your account or log in to access the magical world of AI content generation.

Free Trial: Enjoy a complimentary free trial with 5 generations to explore the possibilities.

Explore and Generate: Choose your desired content type, be it conversations, code, images, videos, or audio, and experience the AI-generated wonders.

Upgrade to Pro: Once your free trial is over, you can continue creating limitless content by subscribing to our Pro plan.

## Installation
1. Clone this repository:
```git clone https://github.com/diegoddie/AI_Generator_SaaS```
```cd ai-saas```

2. Install the dependencies:
```npm install```

3. Set up the environment variables:
Create a .env file at the root of the project and add the necessary API keys:
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
- CLERK_SECRET_KEY
- NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
- NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
- NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
- NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
- OPENAI_API_KEY
- REPLICATE_API_TOKEN
- DATABASE_URL
- STRIPE_API_KEY
- NEXT_PUBLIC_APP_URL
- STRIPE_WEBHOOK_SECRET

4. Run the development server:
```npm run dev```

5. Open your browser and visit http://localhost:3000 to experience the magic of WizAIrd.