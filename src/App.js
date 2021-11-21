import React from 'react'
import {BrowserRouter as Router,  Routes,Route} from  'react-router-dom'
import Header from './containers/Header'
import ProductDetails from './containers/ProductDetails'
import ProductListing from './containers/ProductListing'

const App = () => {
    return (
        <div>
        <Router>
        <Header />
        <Routes>
        
        <Route path='/' exact element={ <ProductListing />} />
        <Route path='/product/:productId' exact element={<ProductDetails />} />
        </Routes>
        </Router>
          
        </div>
    )
}

export default App
