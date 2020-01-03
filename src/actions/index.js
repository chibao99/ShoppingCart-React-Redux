import * as Types from './../constants/ActionType';

export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}
export const changeMessage = (message) => {
    return {
        type: Types.CHANE_MESSAGE,
        message
    }
}
export const deleteProductInCart = (product) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        product
    }
}
export const updateQuantityProduct = (product, quantity) => {
    return{
        type:Types.UPDATE_QUANTITY_PRODUCT,
        product,
        quantity
    }
}