import { ADD_TO_CART, LOGOUT_USER, SAVE_USER_DATA, SET_LOADING, SET_LOGIN_MODAL } from "./actionTypes"

const initialState={
    isLoading:false,
    isLoggedIn:false,
    isLoginModal:false,
    products:[],
    user:null,
    cart:[]
}
export const mainReducer=(state=initialState,action)=>{
    console.log(action.type,action.payload)
    switch(action.type){
        case SET_LOADING:return{
                ...state,
                isLoading:action.payload
        }
        case SET_LOGIN_MODAL:return{
            ...state,
            isLoginModal:!state.isLoginModal
        }
        case SAVE_USER_DATA :return{
            ...state,
            isLoggedIn:true,
            user:action.payload
        }
        case LOGOUT_USER:return{
            ...initialState
        }
        case ADD_TO_CART:return{
            ...state,
            cart:[...state?.cart,action.payload]
        
        }
    
    }
}
