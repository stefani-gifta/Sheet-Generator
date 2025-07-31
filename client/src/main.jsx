import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FormTemplate from './FormTemplate.jsx'
import App from './App.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <FormTemplate />
  </StrictMode>,
)
