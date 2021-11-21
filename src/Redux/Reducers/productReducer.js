import { ActionType } from "../constants/action-type";

const initialState = {
    product :[{
        id:'1',
        title:'shanu',
        category:'programmer'

    }]
}

export const productReducer = (state =initialState,{type,payload}) => {
    //we distracture action {type,payload}= action
switch (type) {
    case ActionType.Set_PRODUCTS:
        return state
        break;

    default: return state
        break;
}
    
}