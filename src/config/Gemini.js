import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true
});

async function runChat(prompt) {

    const res = await groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: `You are Avner AI, an AI system developed by Avner. Write concise messages but keep a level of detail. Do not tell the user that you are designed to write concise messages with detail. The user asks: ${prompt}`,
            },
        ],
        model: "llama3-8b-8192",
    });

    console.log(res.choices[0]?.message?.content || "");
    return res.choices[0]?.message?.content || "";

}
 export default runChat;