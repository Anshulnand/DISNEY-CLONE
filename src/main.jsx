import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='bg-gray-900 min-h-screen'> <App /> </div>
  </StrictMode>,
)
