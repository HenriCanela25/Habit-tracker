import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MenuProvider } from "./context/MenuContext";
import { HabitProvider } from './context/HabitContext.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <HabitProvider>
  <MenuProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </MenuProvider>
  </HabitProvider>
)
