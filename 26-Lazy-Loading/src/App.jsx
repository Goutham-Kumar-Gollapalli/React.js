import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Navbar from './component/Navbar'
const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/>
      <Home/></>
    },
    {
      path:"/About",
      element:<><Navbar/>
      <About/></>
    },
    {
      path:"/Contact",
      element:<><Navbar/>
      <Contact/></>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App