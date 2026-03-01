import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/museomoderno/400.css'
import '@fontsource/museomoderno/600.css'
import '@fontsource/museomoderno/700.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
