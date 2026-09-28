import React from 'react'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import NotFound from './components/NotFound'
import Navbar from './Navbar'
const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/contact",
      element:
      <div>
        <Navbar/>
        <Contact/>
      </div>
    },
    {
      path:"/About",
      element:<div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path:"*",
      element:<NotFound/>
    }
  ])
  return (
    <div>
      
      <RouterProvider router={router}/>
    </div>
  )
}

export default App