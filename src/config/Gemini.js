import Groq from "groq-sdk";

const env = await import.meta.env;
const groqApiKey = env.VITE_GROQ_API_KEY;

const groq = new Groq({
  apiKey: groqApiKey,
  dangerouslyAllowBrowser: true
});

// const AI21_API_KEY = "lEJMRazTglv1GnFImA9Z2NV85S8xzRJX";
// const ROOT_URL = "https://api.ai21.com/studio/v1/";

const reqGroqAI = async (content) => {
    const res = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: "You are Avner AI, an AI system developed by Avner. Write concise messages but keep a level of detail.",
        },
      ],
      model: "llama3-8b-8192",
    });
    return res;
};

async function runChat(prompt) {
    const chatCompletion = await reqGroqAI(prompt);
    console.log(chatCompletion.choices[0]?.message?.content || "")
    return chatCompletion.choices[0]?.message?.content || ""
}

 export default runChat;