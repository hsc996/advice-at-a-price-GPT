import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChatProvider } from './contexts/ChatContextProvider.jsx';
import App from './App.jsx';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatProvider>
      <App />
    </ChatProvider>
  </StrictMode>,
)
