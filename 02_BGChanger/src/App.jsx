import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [color, setColor] = useState('blue');

  return (
    <>
    <div className='container-fluid d-flex gap-2 p-4' style={{backgroundColor : color, width : '100vw', height: '100vh'}}>
      <button type="button" class="btn btn-primary" onClick={() => setColor("blue")}>Primary</button>
      <button type="button" class="btn btn-secondary" onClick={() => setColor("gray")}>Secondary</button>
      <button type="button" class="btn btn-success" onClick={() => setColor("green")}>Success</button>
      <button type="button" class="btn btn-danger" onClick={() => setColor("red")}>Danger</button>
      <button type="button" class="btn btn-warning" onClick={() => setColor("yellow")}>Warning</button>
      <button type="button" class="btn btn-info" onClick={() => setColor("skyblue")}>Info</button>
      <button type="button" class="btn btn-light" onClick={() => setColor("white")}>Light</button>
      <button type="button" class="btn btn-dark" onClick={() => setColor("black")}>Dark</button>
    </div>
    </>
  )
}

export default App
