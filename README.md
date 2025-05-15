🧠 AI-Powered Developer Portfolio
A sleek, developer-themed personal portfolio built using Next.js, styled to look like a VS Code interface, a floating AI assistant to answer questions about you and your work.

<!-- Replace with your screenshot path if available -->

🚀 Live Demo
👉 View Live on Vercel
(https://ai-portfolio-murex-mu.vercel.app/)

🛠 Features
🖥️ VS Code Inspired UI – Styled to look like a code editor interface.

🤖 AI Assistant – Hugging face inference assistant that interacts with visitors and answers questions.

📄 Separate Pages – Projects, About Me, Resume, Contact – all structured as separate pages.

✨ Page Transitions – Smooth animations on navigation using Framer Motion.

🎨 Responsive Design – Fully mobile-friendly and responsive.

📁 Project Structure
bash
Copy
Edit
src/
├── components/       # Reusable React components like Topbar, AI Assistant
├── pages/            # Each page like /about, /projects
├── styles/           # Global and module CSS
├── app/ or layouts/  # Page layout wrappers (if using app dir routing)
public/               # Static assets
🧑‍💻 Tech Stack
Framework: Next.js

UI: Custom CSS / Tailwind (if used)

Animation: Framer Motion

AI Assistant: Hugging face inference API

📦 Getting Started
1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/yourusername/ai-portfolio.git
cd ai-portfolio
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run Locally
bash
Copy
Edit
npm run dev
4. Deploy to Vercel
Push your code to GitHub

Go to vercel.com and import your repository

Ensure that your Root Directory points to the folder with your package.json

Vercel auto-detects Next.js and deploys it

📌 Customization Tips
Update content in pages/ like about.js, projects.js, etc.

Modify styles in styles/ or through component-level CSS

Configure the AI Assistant logic and responses in components/AIAssistant.jsx

📄 License
MIT License.
Free to use and modify for personal or professional use.
