/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import trollDP from '../assets/profile_troll_dp.jpg';
import selfDP from '../assets/selfport2.jpg';

const ChatContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useChat = () => {
    return useContext(ChatContext);
};

export const ChatProvider = ({children}) => {
    const [messages, setMessages] = useState([]);

    const displayMessage = (sender, msg) => {
        const profileImage = sender === "Marv" ? trollDP : selfDP;
        setMessages(prevMsgs => [
            ...prevMsgs,
            { text: msg, isBot: sender === "Marv", profileImage }
        ]);
    };

    return(
        <ChatContext.Provider value={{ messages, displayMessage }}>
            {children}
        </ChatContext.Provider>
    );
}
