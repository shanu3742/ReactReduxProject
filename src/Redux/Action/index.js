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

export const removeSelectedProduct = () => {
    return {
        type:ActionType.REMOVE_SELECTED_PRODUCTS,
        
    }
}