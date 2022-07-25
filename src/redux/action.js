import { SET_LOADING, SET_LOGIN_MODAL } from "./actionTypes"

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