
# Advice At A Price

## Custom GPT chatbot, created using the "Marv" AI assistant: a public API provided by OpenAI. This application is creacted using React, HTML and CSS with a Vite.js framework.

```
my-gpt-app/
├── public/
│   ├── index.html
│ 
├── src/
│   ├── assets/                  # Static assets (images, icons, etc.)
│   │   ├── images/
│   │   └── icons/
│   ├── components/              # Reusable components
│   │   ├── Chat/
│   │   │   ├── ChatInput.jsx
│   │   │   ├── ChatMessage.jsx
│   │   │   ├── ChatHistory.jsx
│   │   │   └── Chat.jsx
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   └── ...                  # Other components
│   ├── contexts/                # React contexts for global state
│   │   ├── ChatContext.jsx
│   │   └── UserContext.jsx
│   ├── hooks/                   # Custom hooks
│   │   ├── useChat.js
│   │   └── useAuth.js
│   ├── styles/                  # Global styles
│   │   ├── App.css
│   │   └── variables.css        # CSS variables or theme
│   ├── utils/                   # Utility functions
│   │   ├── api.js               # API functions for OpenAI
│   │   └── helpers.js
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point for React
│   └── index.css                # Global CSS file
├── .gitignore
├── package.json
└── vite.config.js
```

# Styling

- Find font - google fonts
- Light/dark theme toggle
  - Nice to have - not a priority


# API

- [OpenAI API](https://platform.openai.com/docs/overview)