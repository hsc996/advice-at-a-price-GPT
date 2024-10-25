// /* eslint-disable no-undef */
// import { OpenAI } from "openai";

// const client = new OpenAI({
//     apiKey: import.meta.env.VITE_OPENAI_API_KEY,
//     dangerouslyAllowBrowser: true,
// });

// export async function sendMsgToOpenAI(message) {
//     try {
//         const response = await client.chat.completions.create({
//             messages: [{ role: 'user', content: message }],
//             model: "gpt-3.5-turbo",
//         });
//         console.log(response.choices[0].message.content);
//     } catch (error) {
//         console.error("Error communicating with OpenAI:", error.message);
        
//         if (error.response) {
//             console.error("Response data:", error.response.data);
//             console.error("Response status:", error.response.status);
//         }
//     }
// }
