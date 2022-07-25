import { SET_LOADING, SET_LOGIN_MODAL } from "./actionTypes"

const initialState={
    isLoading:false,
    isLoggedIn:false,
    isLoginModal:false,
    products:[],
    user:[]
}
export const mainReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_LOADING:return{
                ...state,
                isLoading:action.payload
        }
        case SET_LOGIN_MODAL:return{
            ...state,
            isLoginModal:!state.isLoginModal
        }
    
    }
}