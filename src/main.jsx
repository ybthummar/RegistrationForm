import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FormwithHooks from './FormwithHooks.jsx'
import FormwithClass from './FormwithClass.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormwithClass />
  </StrictMode>,
)
