console.log("main.tsx: Starting application...");
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const container = document.getElementById('root');
console.log("main.tsx: Root container exists?", !!container);

if (container) {
  console.log("main.tsx: Calling createRoot().render()...");
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
} else {
  console.error("main.tsx: ERROR: Root container not found!");
}
