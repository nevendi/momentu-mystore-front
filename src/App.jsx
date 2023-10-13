import { useState } from 'react'
import './App.css'
import AuthProvider from "./provider/AuthProvider.jsx";
import Routes from './routes/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <AuthProvider>
          <Routes />
      </AuthProvider>
  )
}

export default App
