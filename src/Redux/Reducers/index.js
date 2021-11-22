import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { selectProductReducer } from "./productReducer";

const rootReducer = combineReducers({
   allProduct: productReducer,
product:selectProductReducer})

export default rootReducer