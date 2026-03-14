# AI Study Topic Explainer

## Project Description
AI Study Topic Explainer is a web application that helps students quickly understand study topics using Artificial Intelligence.

Students can enter any topic (for example: Photosynthesis, Binary Search, Newton’s Laws), and the system will generate a simple explanation suitable for students.

Instead of searching multiple websites, this tool provides a quick AI-generated explanation to make learning easier.

This project demonstrates how AI can be integrated into educational software using modern web technologies.

---

## How AI API Was Used

This project uses the **Google Gemini API** to generate explanations.

Workflow:

1. The student enters a study topic in the input field.
2. When the **"Explain Topic"** button is clicked, the frontend sends a request to a Next.js API route:
POST /api/explain

3. The API route sends a prompt to the Gemini AI model.

Example prompt:
Explain the topic "Photosynthesis" in simple terms for a student.

4. Gemini AI generates a simplified explanation.
5. The API sends the response back to the frontend.
6. The explanation is displayed on the screen.

This shows how generative AI can be integrated into a full-stack application.

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Google Gemini API
- Vercel Deployment

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/kalyan768/ai-study-topic-explainer.git

### 2. Navigate to the project folder
cd ai-study-topic-explainer
3. Install dependencies
npm install
4. Create environment variables

Create a file called:
.env.local

Add your Gemini API key:

GEMINI_API_KEY=your_api_key_here
5. Run the development server
npm run dev
Open in browser:

http://localhost:3000

Live Deployment

The project is deployed on Vercel.
https://ai-study-topic-explainer-oexbb3lcg-kalyan768s-projects.vercel.app
