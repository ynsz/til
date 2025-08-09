import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { AdminFlagProvider } from './components/providers/AdminFlagProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminFlagProvider>
      <App />
    </AdminFlagProvider>
  </StrictMode>,
)
