import { SET_LOADING } from "./actionTypes"

export const setLoading=(payload)=>{
    return{
        type:SET_LOADING,
        payload:payload
    }
}