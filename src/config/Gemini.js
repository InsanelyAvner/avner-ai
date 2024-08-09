import Groq from "groq-sdk";
const groqApiKey = import.meta.env.VITE_GROQ_API_KEY;

const groq = new Groq({
    apiKey: "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",
    dangerouslyAllowBrowser: true
});

async function runChat(prompt) {

    const res = await groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: "You are Avner AI, an AI system developed by Avner. Write concise messages but keep a level of detail.",
            },
        ],
        model: "llama3-8b-8192",
    });

    console.log(res.choices[0]?.message?.content || "");
    return res.choices[0]?.message?.content || "";

}
 export default runChat;