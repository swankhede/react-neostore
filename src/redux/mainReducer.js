import { LOGOUT_USER, SAVE_USER_DATA, SET_LOADING, SET_LOGIN_MODAL } from "./actionTypes"

const initialState={
    isLoading:false,
    isLoggedIn:false,
    isLoginModal:false,
    products:[],
    user:[]
}
export const mainReducer=(state=initialState,action)=>{
    console.log(action.type)
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
    
    }
}