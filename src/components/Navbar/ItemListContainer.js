import React from 'react'
import { Contador } from './ItemCount';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const ItemListContainer = () => {
    return (
        <Router>
            <Route path="/carrito" exact>
                <Contador/>
            </Route>
        </Router>        
    )
}

export default ItemListContainer
