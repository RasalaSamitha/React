import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter, setCounter] = useState(10);

  const AddValue = () =>{
    console.log(counter);
    if(counter < 20)
       setCounter(counter+1);
      
  //this will not update counter value 4 times updates only 1 time 
  // setCounter(counter+1);
  // setCounter(counter+1);
  // setCounter(counter+1);
  // setCounter(counter+1);
  // setCounter(counter+1);

  //this updates counter value 5 times bzc it takes previous value 
  // setCounter((pre) => pre + 1);
  // setCounter((pre) => pre + 1);
  // setCounter((pre) => pre + 1);
  // setCounter((pre) => pre + 1);
  // setCounter((pre) => pre + 1);
  }

  const removeValue = () => {
    console.log(counter);
    if(counter > 1)
    setCounter(counter-1);
  }
  return (
    <>
     <h1>Counter App</h1>
     <h3> counter value : {counter}</h3>
     <button onClick={AddValue}>Add value</button>
     <button onClick={removeValue}>Decrease value</button>
    </>
  )
}

export default App
