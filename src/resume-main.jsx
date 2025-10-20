import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ResumePage from './ResumePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResumePage />
  </StrictMode>,
)

