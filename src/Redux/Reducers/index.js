import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const rootReducer = combineReducers({
   allProduct: productReducer,})

export default rootReducer