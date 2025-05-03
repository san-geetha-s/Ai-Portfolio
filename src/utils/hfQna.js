export async function getHuggingFaceAnswer(question, context) {
    const response = await fetch("https://api-inference.huggingface.co/models/deepset/roberta-base-squad2", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question, context }),
    })
  
    const data = await response.json()
    return data.answer || 'No answer found.'
  }
  