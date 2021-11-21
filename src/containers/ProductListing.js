import React from 'react'

import { useDispatch } from 'react-redux';
import { setProduct } from '../Redux/Action';
import { useSelector } from 'react-redux'


import ProductComponent from './ProductComponent'

const ProductListing = () => {
    const products = useSelector(state => state.allProduct.products)
  

    const dispatch = useDispatch()
    

    //now we get api data from server and now we have to store this data in store
 
   // console.log(data)
   const api ='https://fakestoreapi.com/products'

   const  FetchData = React.useCallback(async() => {
    try{
        const result = await fetch(api)
        const jresult = await result.json()
        dispatch(setProduct(jresult))
         

    }catch(error){
        console.log(error)
    }
},[dispatch])
   React.useEffect(() => {
    FetchData()
   },[FetchData])
    return (
        <div className='ui grid container'>
        {products===undefined?<h1>Loading</h1>: <ProductComponent />}
       
        </div>
    )
}

export default ProductListing
