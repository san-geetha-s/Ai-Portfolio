// pages/api/ask.js
export default async function handler(req, res) {
    const { question } = req.body; // Assuming the question is passed in the body
  
    try {
      // Use hfqna.js (your Hugging Face connection logic) to fetch answers
      const answer = await getAnswerFromHuggingFace(question);
      res.status(200).json({ answer });
    } catch (error) {
      res.status(500).json({ error: 'Error while fetching answer' });
    }
  }
  