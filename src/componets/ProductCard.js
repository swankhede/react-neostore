import React from 'react'
import {Link} from 'react-router-dom'

const ProductCard=({product})=>{
    const{
        title,
        image,
        price,
        description,
        id
    }=product
  return (
    
      <div className='col-md-3 col-lg-3 col-6 '>
            <Link to={`/details/${id}`} className='text-decoration-none text-dark'>

            <div className='product-card'>
            <div className='product-img'>
            <img src={image} className='img-fluid'/>
        
            </div>
        <div className='card-body'>
            <p className='text-decoration-none'>{title}</p>
            <p className='text-decoration-none'>${price}</p>
        </div>
    </div>
            </Link>
        

    </div>
     
    
  )
}

export default ProductCard