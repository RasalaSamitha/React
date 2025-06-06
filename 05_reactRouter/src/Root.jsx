import React from 'react'
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import {Outlet} from "react-router-dom"

export default function Root() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
