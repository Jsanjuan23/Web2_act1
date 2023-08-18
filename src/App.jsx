import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import 'bootstrap/dist/css/bootstrap.css';
import Card from './components/Card'
import Contador from './components/Contador'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container"><br />
        <Card setCount={setCount} count={count}/><br />
        <Contador setCount={setCount} count={count}/><br />
      </div>

    </>
  )
}

export default App
