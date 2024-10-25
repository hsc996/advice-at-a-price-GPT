import '../styles/Sidebar.css'
import gptLogo from '../assets/gpt_logo.png';

export function Sidebar(){
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
                    <div className="listItems">
                        <img src="" alt="" className="listItemsImg" />
                        Home
                    </div>
                    <div className="listItems">
                        <img src="" alt="" className="listItemsImg" />
                        Saved
                    </div>
                    <div className="listItems">
                        <img src="" alt="" className="listItemsImg" />
                        Upgrade to Pro
                    </div>
                </div>
            </div>
        </>
    );
};