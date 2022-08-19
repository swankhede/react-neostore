import { ADD_TO_CART, DELETE_PRODUCT, LOGOUT_USER, SAVE_USER_DATA, SET_CART_MODAL, SET_LOADING, SET_LOGIN_MODAL } from "./actionTypes"

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    isLoginModal: false,
    isCartModal: false,
    products: [],
    user: null,
    cart: null
}
export const mainReducer = (state = initialState, action) => {
    console.log("line 13", action.type, action.payload)
    switch (action.type) {
        case SET_LOADING: return {
            ...state,
            isLoading: action.payload
        }
        case SET_CART_MODAL: return {
            ...state,
            isCartModal: !state.isCartModal
        }
        case SAVE_USER_DATA: return {
            ...state,
            isLoggedIn: true,
            user: action.payload,

        }
        case LOGOUT_USER: return {
            ...initialState
        }
        case ADD_TO_CART: return {
            ...state,
            cart: action.payload

        }
        case DELETE_PRODUCT:
            const newCart = state.cart.filter(prod => prod.id != action.payload)
            console.log("newCart", newCart)
            return {
                ...state,
                cart: newCart
            }


        default: return state

    }
}
