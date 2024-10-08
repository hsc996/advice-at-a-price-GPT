import './styles/App.css'
import gptLogo from './assets/gpt_logo.png'

function App() {

  return (
    <>
      <div className='App'>
        <div className='sideBar'>
          <div className='upperSide'>
            <div className='upperSideTop'><img src={gptLogo} alt='chat_logo' className='logo' /><span className='brand'>CustomGPT</span></div>
            <button className='midBtn'><img src='' alt='' className='addBtn' />New Chat</button>
            <div className='upperSideBottom'>
                <button className='query'><img src='' alt='' />What is programming?</button>
                <button className='query'><img src='' alt='' />What is programming?</button>
            </div>
          </div>
          <div className='lowerSide'></div>
        </div>
      </div>
    </>
  )
}

export default App
