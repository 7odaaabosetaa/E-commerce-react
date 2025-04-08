import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./app.css"
import { HashRouter , Router  } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HashRouter> */}
    <App />
    {/* </HashRouter> */}
  </StrictMode>,
)
