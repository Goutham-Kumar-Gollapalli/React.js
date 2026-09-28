import React from 'react'

import products from '../data/data'
import { Link } from 'react-router-dom'
const Products = () => {
  return (
    <div className='container'>
        <h2>Products Link</h2>
        <div className='grid'>
            {
                products.map((product)=>(
                    <div className='card' key={product.title}>
                        <h3>{product.title}</h3>
                        <Link to={`/product/${product.id}`}>
                            <button>view</button>
                        </Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Products