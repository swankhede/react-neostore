import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../api/api'
import LoadingModal from '../componets/LoadingModal'
import ProductCard from '../componets/ProductCard'
import { setLoading } from '../redux/action'

const Category=()=> {
    const {type}=useParams()
    const [products,setProducts]=useState([])
    const isLoading =useSelector(state=>state?.isLoading)
    console.log("isLoading",isLoading)
    const collection=type=="men's clothing"?"men's%20clothing":"women's%20clothing"
    
    const dispatch=useDispatch()
    console.log(collection)
    console.log(products)

    useEffect(() => {
        
        try{
            dispatch(setLoading(true))
            fetch(`${baseUrl}products/category/${collection}`)
            .then(res=>res.json())
            .then(json=>setProducts(json))
            dispatch(setLoading(false))
        }catch(e){
            dispatch(setLoading(false))
            console.log("error",e)
        }
        
      
    }, [type])
    


  return (
    <div className="container-fluid">
        
    <div className="container">
      <div className="row gx-2 gy-2">
          {
              isLoading?<LoadingModal/>:
              products?.length > 0
          ? products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : null
          }
        
      </div>
    </div>
  </div>
  )
}

export default Category