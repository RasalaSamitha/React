import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './Components/Login/Login'
import './App.css'
import Profile from './Components/Profile/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    <>
      <UserContextProvider>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
