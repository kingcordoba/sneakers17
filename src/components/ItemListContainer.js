import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const ItemListContainer = () => {
    return (
        <Router>
            <Route path="/carrito" exact/>
        </Router>        
    )
}

export default ItemListContainer
