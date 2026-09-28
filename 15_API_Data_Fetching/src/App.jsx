import React from 'react'
import './App.css';
import axios from 'axios';
import {useState,useEffect} from 'react'
const App = () => {
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);
  useEffect(()=>{
    // fetch("https://fakestoreapi.com/products")
    // .then((res)=>res.json())
    // .then((data)=>setProducts(data))
    axios.get("https://fakestoreapi.com/product")
    .then((res)=>{
      setProducts(res.data);
      setLoading(false);
    })

    .catch((err)=>
      {
        setLoading(false);
        setError("Please try again after some time");
        console.log("Error in api");
    })
  },[]);

  return (
    <div>
      <div className="product-container"></div>
      <h2 className="title">Product List</h2>

      <div className="products-grid">
        {
          products.map((product)=>(
            <div className="product-card" key={product.id}>
              <img className="product-image" src={product.image} alt="" />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price}</p>
              <p className="product-rating">⭐{product.rating.rate}-{product.rating.count}</p>
            </div>
          ))
        }
      </div>
      <div>{loading && <h2>Loading ..</h2>}</div>
      <div>{error && <h2>{error}</h2>}</div>
    </div>
  )
}

export default App