import { SET_LOADING } from "./actionTypes"

const initialState={
    isLoading:false,
    isLoggedIn:false,
    products:[],
    user:[]
}
export const mainReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_LOADING:return{
                ...state,
                isLoading:action.payload
        }
    
    }
}