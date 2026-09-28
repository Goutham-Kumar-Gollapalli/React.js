import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import ForwardBackward from './components/ForwardBackward';

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element: 
      <div>
        <Navbar/>
        <ForwardBackward/>
        <Home/>
      </div>
    },
    {
      path:"/login",
      element:<div>
        <Navbar/>
        <ForwardBackward/>
        <Login/>
      </div>
    },
     {
      path:"/about",
      element:<div>
        <Navbar/>
        <ForwardBackward/>
        <About/>
      </div>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>      
    </div>
  )
}

export default App