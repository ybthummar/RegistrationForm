import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FormwithHooks from './FormwithHooks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormwithHooks />
  </StrictMode>,
)
