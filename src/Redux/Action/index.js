import { ActionType } from "../constants/action-type"

export const setProduct = (product) => {
    return {
        type:ActionType.Set_PRODUCTS,
        payload:product
    }
   
}

export const selectedProduct = (product) => {
    return {
        type:ActionType.SELECTED_PRODUCTS,
        payload:product
    }
}