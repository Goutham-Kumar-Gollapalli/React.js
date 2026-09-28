import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import ProductDetails from './components/ProductDetails';
import NotFound from './components/NotFound';
import Shop from './pages/Shop';
import Men from './components/shop/Men';
import Women from './components/shop/Women';
const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element: <div>
        <Navbar/>
      <Home/></div>
    },
    {
      path:"/about",
      element: <div>
        <Navbar/>
      <About/></div>
    },
    {
      path:"/products",
      element: <div>
        <Navbar/>
      <Products/></div>
    },{
      path:"/product/:id",
      element: <div>
        <Navbar/>
        <ProductDetails/>
        </div>
    },
    {
      path:"/shop",
      element:
      <div>
        <Navbar/>
        <Shop/>
      </div>,
      children:[
        {
          path:"men",
          element:<Men/>
        },
        {
          path:"women",
          element:<Women/>
        }
      ]
    }
    ,{
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