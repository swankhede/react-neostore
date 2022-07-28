import { ADD_TO_CART, SAVE_USER_DATA, SET_LOADING, SET_LOGIN_MODAL } from "./actionTypes"

export const setLoading=(payload)=>{
    return{
        type:SET_LOADING,
        payload:payload
    }
}
export const setLoginModal=()=>{
    return {
        type:SET_LOGIN_MODAL,
        
    }
}

export const saveUserData=(payload)=>{
    console.log(payload)
    return {
        type:SAVE_USER_DATA,
        payload:payload
        
    }
}
export const addToCart=(payload)=>{
    console.log(payload)
    return{
        type:ADD_TO_CART,
        payload:payload
    }
}