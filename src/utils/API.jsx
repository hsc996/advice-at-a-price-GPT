import OpenAI from "openai";

new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});


export async function callMarvAPI(userMsg){
    
    const APIbody = {
        "model": "gpt-4o",
        "messages": [
          {
            "role": "system",
            "content": "You are Marv, a chatbot that reluctantly answers questions with sarcastic responses."
          },
          {
            "role": "user",
            "content": userMsg
          }
        ],
        "temperature": 0.5,
        "max_tokens": 64,
        "top_p": 1
    };


    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
          body: JSON.stringify(APIbody)
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;

    } catch (error) {
      
        console.log("API call error:", error);
        return "Sorry, I couldn't get a response right now.";
    }
}
