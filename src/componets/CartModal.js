import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, setCartModal } from '../redux/action'

function CartModal({ isVisible, cart }) {

  const className = isVisible ? 'cart-modal' : 'hide'

  console.log(isVisible)
  console.log("state")

  const dispatch = useDispatch()
  const state = useSelector(state => state)

  const closeCart = () => {
    dispatch(setCartModal())
  }



  return (

    <div className={className}>

      {
        cart?.length < 1 ?
          <div className='h-100'>
            <button className='btn btn-light mb-2' onClick={closeCart}>X</button>
            <div class="modal-dialog modal-dialog-centered">

              <p className='text-dark'>Cart is Empty</p>
            </div>
          </div>
          :
          <div class="container p-3">
            <button className='btn btn-light mb-2' onClick={closeCart}>X</button>
            {cart?.map(prod =>


              <div className='row bg-white rounded p-2 align-items-center mb-1'>
                <div className='col-3 '>
                  <img src={prod.image} height={40} width={40} />
                </div>



                <div className='col-7   ml-1 '>
                  <span className='text-dark fs-6'>{prod.title}</span>

                  <p className='card-subtitle text-secondary'>${prod.price}</p>
                  <p className='card-subtitle text-secondary'>Quantity:{prod.quantity}</p>
                </div>

                <div className='col-1 delete-btn' onClick={() => dispatch(deleteProduct(prod.id))}>
                  <i class="fa-solid fa-trash text-secondary"></i>
                </div>


              </div>
            )}

          </div>
      }





    </div>
  )
}

export default CartModal