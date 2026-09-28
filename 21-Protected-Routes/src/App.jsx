import React, { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Login from './Components/Login'
import Products from './Components/Products'
import ProtectedRoute from './Components/ProtectedRoute'
const App = () => {
  const [isAuth,setIsAuth]=useState(false);
  const router=createBrowserRouter([
    {
      path:"/",
      element: <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/login",
      element: <div>
        <Navbar/>
        <Login isAuth={isAuth} setIsAuth={setIsAuth}/>
      </div>
    },
    {
      path:"/products",
      element: <div>
          <Navbar/>
        <ProtectedRoute isAuth={isAuth}>
          <Products/>
        </ProtectedRoute>
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