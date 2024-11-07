import { useState } from "react";
import { useChat } from "../contexts/ChatContextProvider";
import { callMarvAPI } from "../utils/API";
import sendBtn from '../assets/send_icon.png';
import '../styles/chatStyle.css'


export function HandleQuestion(){
    const { messages, displayMessage } = useChat();
    const [input, setInput] = useState("");
  
    const handleSubmission = async () => {
    
      if (input.trim() === "") return;

      // To display the user message on screen
      displayMessage("User", input);
      setInput("");

      // Call the API and handle the response
      const response = await callMarvAPI(input);
      displayMessage("Marv", response);
    };


    return(
        <>
            <div>
                <div className="messageCont">
                    <div className="userChat">
                        {messages.map((msg, i) => (
                            <div key={i} className="message">
                                {msg.isBot ? (
                                    <>
                                        <span className="messageText">{msg.text}</span>
                                        <img src={msg.profileImage} alt="Bot" className="trollDP" />
                                    </>
                                ) : (
                                    <>
                                        <img src={msg.profileImage} alt="User" className="userDP" />
                                        <span className="messageText">{msg.text}</span>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="inputBox">
                    <input
                        type="text"
                        id="user-input"
                        placeholder="     Send a message"
                        value={input}
                        onChange={(e) => {setInput(e.target.value)}}
                    />
                    <button className="send" onClick={handleSubmission}>
                        <img className="sendBtn" src={sendBtn} alt="SEND" />
                    </button>
                </div>
            </div>
        </>
    )
}