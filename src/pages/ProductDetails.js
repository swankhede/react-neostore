import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../api/api'
import LoadingModal from '../componets/LoadingModal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart, setLoading } from '../redux/action'

function ProductDetails() {

  const { id } = useParams()
  const [details, setDetails] = useState('')
  const dispatch = useDispatch()
  const user = useSelector(state => state?.user)
  const cart = useSelector(state => state?.cart)
  const [quantity, setQuantity] = useState(1)
  console.log("17")
  console.log("16", cart)
  console.log("18", user, user?.id)

  const state = useSelector(state => state)
  console.log(state?.user)
  useEffect(() => {

    try {
      dispatch(setLoading(true))
      fetch(`${baseUrl}products/${id}`)
        .then(res => res.json())
        .then(json => setDetails(json))
      setTimeout(() => dispatch(setLoading(false)), 700)

    } catch (e) {
      dispatch(setLoading(false))
      console.log("Error", e)
    }


  }, [id])

  const handleQuantityChange = (type) => {
    if (type == 'inc') {
      setQuantity(quantity + 1)
    } else if (quantity != 1) {
      setQuantity(quantity - 1)

    }
  }

  const handleAddToCart = () => {

    if (state.isLoggedIn) {  
      console.log("43", `http://localhost:3004/users/${user?.id}`)
      fetch(`http://localhost:3004/users/${user?.id}`, {
        method: 'PATCH',
        body: JSON.stringify(
          {
            address: state?.user?.address,
            cart: state?.user?.cart.push(details),
            firstname: state?.user.firstname,
            id: state?.user?.id,
            password: state?.user?.password,
            username: state?.user?.username,
            quantity: quantity
          }
        )
      })
        .then(res => {
          console.log(res)
          return res.json()
        })
        .then(json => console.log(json))
        .catch(err => console.log("68", err))
      const newDetails = { ...details, quantity }
      console.log("line 64", cart)
      console.log("line 66 details", newDetails)

      let newCart = []
      let newProd=[]
      if (cart == null) {

        newCart = [newDetails]
        dispatch(addToCart(newCart))
      } else {
        
        let prod=cart?.filter(pr=>pr.id==details.id)
        
        console.log("line 84",prod)
       
        if(prod.length==1){
          newProd=cart?.filter(pr=>pr.id!=details.id)
          //alert("already")
          newCart=[...newProd,{...newDetails,quantity:newDetails?.quantity+quantity}]
          console.log("86",newCart)
          dispatch(addToCart(newCart))
        
        }else{
          //alert("90")
          console.log("line 84",prod)
          newCart = [...cart, newDetails]
          dispatch(addToCart(newCart))

        }
    
      }


      console.log("line 66", newCart)
      setQuantity(1)
      
      toast("Product added to cart")

    } else {
      toast("please login first")
      // localStorage.setItem("cart",details)
      // dispatch(addToCart(details))

    }
  }

  return (
    <div className='
    product-hero container 
    p-md-5 p-lg-5 d-flex justify-content-center'>
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
        state?.isLoading ? <LoadingModal /> :
          <div className='row '>
            <div className='col-12 col-md-6 col-lg-6'>
              <img src={details.image} className='img-container' />
            </div>
            <div className='col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center'>
              <h3 className='fw-bolder'>{details.title}</h3>
              
              <p className='description'>{details.description}</p>

              <div className='d-flex align-items-center '>
                <span className='fw-bolder my-1 price'>${details?.price}</span>
                <span className='fw-bolder my-1 rating mx-1 d-flex '><i class="fa-solid fa-star"></i>{details?.rating?.rate}</span>

              </div>
              <div className='row'>
                <div className='col-12 col-lg-6 mb-2'>
                  <div className='d-flex'>
                <button className='btn btn-primary counter-btn ' onClick={() => handleQuantityChange('inc')}>+</button>
                <p className='p-2 mx-1 quantity '>{quantity}</p>
                <button className='btn btn-primary counter-btn' onClick={() => handleQuantityChange('dec')}>-</button>
                </div>
                  </div> 
                  <div className='col-12 col-lg-6'>
                  <button className='mx-1 p-3 btn btn-primary w-100' onClick={handleAddToCart}>Add to cart</button>
             
                    </div>
               </div>
            
            </div>
          </div>

      }
    </div>
  )
}

export default ProductDetails