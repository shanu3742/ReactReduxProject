import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


// <div class="ui three column grid">
//   <div class="column">
//     <div class="ui segment">
//       <img>
//     </div>
//   </div>
//   <div class="column">
//     <div class="ui segment">
//       <img>
//     </div>
//   </div>
//   <div class="column">
//     <div class="ui segment">
//       <img>
//     </div>
//   </div>
// </div>

const ProductComponent = () => {
    const products = useSelector(state => state.allProduct.products)
    // const {id,title} = products[0]
    console.log(products)
    return (
        
       <>
       {products.map(el => {
           return(
            <div className="ui three column grid"   key={el.id}>
            <Link to={`/product/${el.id}`}>
            <div className='ui link cards column'>
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
            </Link>
           
            </div>
           )
       })}
       </>
    )
}

export default ProductComponent
