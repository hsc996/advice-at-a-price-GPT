import '../styles/Sidebar.css'
import gptLogo from '../assets/gpt_logo.png';
import { useState } from 'react';

const navbar = [
    "Home",
    "Saved",
    "Upgrade to Pro"
]

export function Sidebar(){

    const [activeItem, setActiveItem] = useState(navbar[0]);

    const handleItemClick = (item) => {
        setActiveItem(item);
    };


    return (
        <>
            <div className="Container">
                <div className="sideBar">
                    <div className="upperSide">
                        <div className="upperSideTop">
                            <img src={gptLogo} alt="chat_logo" className="logo" />
                            <span className="brand">Advice @ a Price</span>
                        </div>
                        <button className="midBtn">+ New Chat</button>
                        <div className="upperSideBottom">
                            <button className="query">
                                <img src="" alt="" />
                                Can I help you? Jk, go away.
                            </button>
                            <button className="query">
                                <img src="" alt="" />
                                Seriously, what do you want
                            </button>
                        </div>
                    </div>
                    <ul>
                        {
                            navbar.map((navItem, index) => {
                                return <li key={index} className={activeItem === navItem ? 'active': ''}>
                                    <button onClick={() => handleItemClick(navItem)}>
                                        {navItem}
                                    </button>
                                </li>;
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

