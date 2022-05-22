import { useState } from 'react'
import './App.css'
import Calc from './Components/Calculadora/Calculadora'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="AppContainer">
      <h1 className="NombreApp">Lab8: Calculadora</h1>
      <h3 className="descApp">Javier Mombiela</h3>
      <Calc />
    </div>
  )
}

export default App
