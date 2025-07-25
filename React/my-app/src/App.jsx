import { useState } from 'react'
// src/App.jsx
import { CssModules } from './components/CssModules';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssModules />
    </>
  )
}

export default App
