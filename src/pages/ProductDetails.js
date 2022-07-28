import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../api/api'
import LoadingModal from '../componets/LoadingModal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart, setLoading } from '../redux/action'

function ProductDetails() {

    const {id}=useParams()
    const[details,setDetails]=useState('')
    const dispatch=useDispatch()
    const user=useSelector(state=>state.user)
    const {cart}=user
    console.log("16",cart)
    console.log(details)

    const state =useSelector(state=>state)
    console.log(state?.isLoading)
    useLayoutEffect(()=>{
        
       try{
        dispatch(setLoading(true))
        fetch(`${baseUrl}products/${id}`)
            .then(res=>res.json())
            .then(json=>setDetails(json))
            setTimeout(()=> dispatch(setLoading(false)),700)
       
       }catch(e){
        dispatch(setLoading(false))
           console.log("Error",e)
       }
       

    },[id])
    console.log("38",{
      ...user,
      cart:[

        details
      ]
    })
  
    const handleAddToCart=()=>{
      
      if(state.isLoggedIn){
          fetch(`localhost:3004/users/${user.id}`,{
            method:'PATCH',
            body:JSON.stringify({
              ...user,
              cart:[details]
              
            })
          })
          .then(res=>{
            console.log(res)
            return res.json()
          })
          .then(json=>console.log(json))

        dispatch(addToCart(details))
        toast("Product")

      }else{
        toast("please login first!");

      }
    }

  return (
    <div className='product-hero container p-md-5 p-lg-5 d-flex justify-content-center'>
           <ToastContainer
           theme='dark'
           position="top-right"
           autoClose={5000}
           hideProgressBar={true}
           newestOnTop={false}
           closeOnClick
           rtl={false}
           pauseOnFocusLoss
           draggable
           pauseOnHover
           />
            {
                state?.isLoading?<LoadingModal/>:
                <div className='row '>
                <div className='col-12 col-md-6 col-lg-6'>
                    <img src={details.image} className='img-container' />
                </div>
                <div className='col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center'>
                    <h3 className='fw-bolder'>{details.title}</h3>
                    <p>{details.description}</p>
                    
                  <div className='d-flex align-items-center '>
                  <span className='fw-bolder my-1 price'>${details?.price}</span>
                    <span className='fw-bolder my-1 rating mx-1 d-flex '><i class="fa-solid fa-star"></i>{details?.rating?.rate}</span>
                   
                  </div>
                  
                    <button className='btn btn-primary' onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>
                
            }
    </div>
  )
}

export default ProductDetails