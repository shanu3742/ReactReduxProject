# Getting Started with Create React and Redux App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# step-1 `install react app `

- `npx create-react-app my-app`

# step-2 `install redux and react-redux`

- `npm i redux react-redux`

# step-3 Redux Folder Stracture

## Create Two Folder inside src folder

- Redux (file related to redux belongs to this folder)
- Containers (`our all component belongs to this folder`)

# Redux Folder Stracture `create three folder and one file `

## folder name

- Action : `what to do`
- Reducer :`How to do`
- constants : `Contains all the action type`

## file name

- store.js : `we store all state in it`

# step 4 constants

- action-type.js

```
export const ActionType = {
    Set_PRODUCTS:'Set_PRODUCTS',
    SELECTED_PRODUCTS:'SELECTED_PRODUCTS',
    REMOVE_SELECTED_PRODUCTS:'REMOVE_SELECTED_PRODUCTS'
}
```

# step 5 Action

- Action has one index.js file where we define what to do

```
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

```

# step 6 `Reducer`

## in Reducer we can we use single file index.js but it is not good things to do .mostly in Reducer we define atleast two file one for acumaliting what to do in a single index.js and others are for how to do.for example-

- index.js-acumalator
- upDownCounter.js
- mulCounter.js

### `in this project we use productReducer.js`

```
import { ActionType } from "../constants/action-type";

// we define initial state

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
```

### now combine all reducer in index.js in `Reducer Folder `

```
import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const rootReducer = combineReducers({
   allProduct: productReducer,})

export default rootReducer
```

# step-7 `now crerate store (store.js)`

```
import { createStore } from "redux";
import rootReducer from "./Reducers";

const store = createStore(rootReducer,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store

```

# step-8 connection between React and Redux `index.js`

```
import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import {Provider} from 'react-redux'
import store from './Redux/store'



ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>

    ,document.getElementById('root'))
```

# step-9 access `store` in the `component`

```
import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
    const products = useSelector(state => state.allProduct.product)
    const {id,title} = products[0]
    console.log(products)
    return (
        <div className='four column wide'>
        <div className='ui link cards'>
        <div className='card'>
        <div className='image' ></div>
        <div className='content'>
        <div className='header'>{title}</div>
        </div>
        </div>

        </div>
        </div>
    )
}

export default ProductComponent

```

# step-10 now we have to store api data what we get from server

## step 1 fetch and `dispatch` data to `store`

```
import React from 'react'

import { useDispatch } from 'react-redux';
import { setProduct } from '../Redux/Action';

import ProductComponent from './ProductComponent'

const ProductListing = () => {

    const dispatch = useDispatch()


    //now we get api data from server and now we have to store this data in store

// console.log(data)
const api ='https://fakestoreapi.com/products'

const FetchData = async() => {
try{
const result = await fetch(api)
const jresult = await result.json()
dispatch(setProduct(jresult))

       }catch(error){
           console.log(error)
       }

}
React.useEffect(() => {
FetchData()
},[])
return (

<div className='ui grid container'>
<ProductComponent />
</div>
)
}

export default ProductListing
```

## step 2: update the `reducer ` code with `payload`

```
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
```

## step 3 use the `updated store` in our project

```
import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
    const products = useSelector(state => state.allProduct)
    // const {id,title} = products[0]
    console.log(products)
    return (
        <div className='four column wide'>
        <div className='ui link cards'>
        <div className='card'>
        <div className='image' ></div>
        <div className='content'>
        <div className='header'>shanu</div>
        </div>
        </div>

        </div>
        </div>
    )
}

export default ProductComponent

```
