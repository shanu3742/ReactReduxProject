import { ActionType } from "../constants/action-type";

const initialState = {
    product :[]
}

export const productReducer = (state =initialState,{type,payload}) => {
    //we distracture action {type,payload}= action
switch (type) {
    case ActionType.Set_PRODUCTS:
        return {...state,products:payload}
        break;

        case ActionType.REMOVE_SELECTED_PRODUCTS:
            return {}
            break;
    

    default: return state
        break;
}


    
}

export const selectProductReducer = (state={},{type,payload}) => {
    switch (type) {
        case ActionType.SELECTED_PRODUCTS:return{...state,...payload}
            
            break;
    
        default: return state
            break;
    }
}