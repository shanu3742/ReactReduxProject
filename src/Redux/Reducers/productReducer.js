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

    default: return state
        break;
}
    
}