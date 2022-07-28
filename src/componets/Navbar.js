import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setLoginModal } from '../redux/action'
import { LOGOUT_USER } from '../redux/actionTypes'
import store from '../redux/store'

export default function Navbar() {
    const dispatch=useDispatch()
    const state=useSelector(state=>state)
    console.log("state",state)
    const handleUserProfileClick=()=>{
        dispatch(setLoginModal())
    }
    return (
        <div className='container'>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">NeoSTORE</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between  " id="navbarNav">
                            
                        <ul class="navbar-nav d-flex align-items-center">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="category/men's clothing">Men</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="category/women's clothing">Women</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li>


                        </ul>
                        <ul className='navbar-nav' id=''>
                            <li class="nav-item  d-flex ">
                                <Link class="nav-link " to='/login' >
                                    {state?.isLoggedIn?
                                            <img 
                                            src='https://png.pngtree.com/png-vector/20191109/ourlarge/pngtree-avatar-male-people-profile-flat-color-icon-vector-icon-bann-png-image_1968610.jpg'
                                            height='30px' width='30px' id='user-image'
                                            onClick={()=>dispatch({type:LOGOUT_USER})}
                                            />
                                        :
                                        <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' height='30px' width='30px' id='user-image' />
                                        }
                                        </Link>
                            </li>
                            <li class="nav-item  d-flex ">
                                <Link class="nav-link cart" to='/login' >

                                    {state?.isLoggedIn?
                                    <div>
                                    <i className='fa fa-shopping-cart' />
                                    <span className='btn btn-light'>{state?.cart?.length}</span>
                                    </div>
                                    
                                    :null}

                                        </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
