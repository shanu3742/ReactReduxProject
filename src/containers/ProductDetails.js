import React from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct ,removeSelectedProduct} from '../Redux/Action';

const ProductDetails = () => {
    const [isLoading,setIsLoading]= React.useState(false)
    const productId = useParams()
    // useParams is used to catch the id from website link
    console.log(productId.productId)

    const product= useSelector((state) => state)

   console.log(product)

    const dispatch = useDispatch()

    const api =`https://fakestoreapi.com/products/${productId.productId}`

   const  FetchData = React.useCallback(async() => {
    setIsLoading(true)
    try{
       
        const result = await fetch(api)
        const jresult = await result.json()
       
        dispatch(selectedProduct(jresult))
         setIsLoading(false)

    }catch(error){
        console.log(error)
        setIsLoading(false)
    }
},[api,dispatch])
   React.useEffect(() => {
       if(productId && productId !==''){
        FetchData()
       }
       return () => {
           dispatch(removeSelectedProduct())
       }
   
   },[FetchData,productId,dispatch])

  
    return (
     <>
   {
       isLoading?<h1>Loading...</h1>:<>
       
      
            
               <div class="ui three column grid">
               <div class="column">
                 <div class="ui segment">
                 <div className='image'>

                 <img src={product.product.image} alt={product.product.title}/>
                 </div>
                 
                 </div>
               </div>
             
              
             </div>
            
        
      </>

   }
     </>

    )
}

export default ProductDetails
