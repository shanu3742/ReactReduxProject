import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
    const products = useSelector(state => state.allProduct.products)
    // const {id,title} = products[0]
    console.log(products)
    return (
        
       <>
       {products.map(el => {
           return(
            <div   key={el.id}>
            <div className='ui link cards'>
            <div className='card'>
            <div className='image' >
            <img src={el.image} alt={el.title}/>
            </div>
            <div className='content'>
            <div className='header'>{el.title}</div>
            <div className='meta price'>$ {el.price}</div>
            <div className='meta'>{el.category}</div>
            </div>
            </div>
            
            </div>
            </div>
           )
       })}
       </>
    )
}

export default ProductComponent
