import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);

  const CopyPassword = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }

  const passwordGenerator = useCallback(() => {
   let pass = '';
   let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

   if(numAllowed) str += '1234567890';
   if(charAllowed) str += '!@#$%^&*()';

   for (let index = 0; index < length; index++) {
    let char = Math.floor(Math.random() * str.length + 1);
    let value = str.charAt(char);

    pass += value;
   }
   setPassword(pass);

  }, [length,numAllowed,charAllowed,setPassword]);

  useEffect(() => {
     passwordGenerator();
  }, [length, numAllowed, charAllowed])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
         <h1 className='text-white text-center my-3'>Password Generator</h1>
         <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
          type='text'
          value={password}
          className="outline-none w-full py-1 px-3 bg-white"
          readOnly
          ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={CopyPassword}>Copy</button>
         </div>
         <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
          <input
          type='range'
          min={3}
          max={100}
          className='cursor-pointer'
          value={length}
          onChange={(e) => setLength(e.target.value)}
          />
          <label>length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            id='numberInput'
            defaultChecked={numAllowed}
            onChange={() => {setNumAllowed((prev) => !prev)}}
            />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            id='numberInput'
            defaultChecked={charAllowed}
            onChange={() => {setCharAllowed((prev) => !prev)}}
            />
            <label>Character</label>
          </div>
         </div>
     </div>
    </>
  )
}

export default App
