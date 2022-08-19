import {
    ADD_TO_CART, DELETE_PRODUCT, SAVE_USER_DATA, SET_CART_MODAL, SET_LOADING,
    SET_LOGIN_MODAL
} from "./actionTypes"

export const setLoading = (payload) => {
    return {
        type: SET_LOADING,
        payload: payload
    }
}
export const setLoginModal = () => {
    return {
        type: SET_LOGIN_MODAL,

    }
}
export const setCartModal = () => {
    return {
        type: SET_CART_MODAL,

    }
}

export const saveUserData = (payload) => {
    console.log(payload)
    return {
        type: SAVE_USER_DATA,
        payload: payload

    }
}
export const addToCart = (payload) => {
    console.log("31", payload)
    return {
        type: ADD_TO_CART,
        payload: payload
    }
}
export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: id
    }
}