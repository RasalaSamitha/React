import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './Root.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, {githubInfoLoader} from './Components/Github/Github.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

//This is one way of handeling router
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },{
//         path: "about",
//         element: <About/>
//       }
//     ]
//   }
// ])

//Other way of handeling router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
       <Route path='' element={<Home/>}/>
       <Route path='about' element={<About/>}/>
       <Route path='contact' element={<Contact/>}/>
       <Route path='user/:userid' element={<User/>}/>
       <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* RouterProvider takes a parameter imp */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
