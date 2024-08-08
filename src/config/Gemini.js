const AI21_API_KEY = "lEJMRazTglv1GnFImA9Z2NV85S8xzRJX";
const ROOT_URL = "https://api.ai21.com/studio/v1/";

async function runChat(prompt) {
  const url = ROOT_URL + "chat/completions";
  const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${AI21_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: 'jamba-instruct',
                messages: [
                    {
                        "role": "user",
                        "content": `You are Avner AI and you are developed by Avner. The user asks you this:${prompt}`
                    }
                ],
                max_tokens: 200,
                temperature: 0.7,
                stop: null
            })
        });
        const data = await response.json();
        console.log(data)
        const responseContent = data.choices[0].message.content;
        return responseContent
}

 export default runChat;