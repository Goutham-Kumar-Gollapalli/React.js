import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/data';
const ProductDetails = () => {
    const {id}=useParams();
    const product=products.find((item)=>(item.id)===Number(id));
    if(!product){
        return <h2>Product not found</h2>
    }
  return (
    <div>
        <h1>ProductDetails</h1>
        <p>Name : {product.title}</p>
        <p>Price : {product.price}</p>
        <p>desc : {product.description}</p>
    </div>
  )
}

export default ProductDetails