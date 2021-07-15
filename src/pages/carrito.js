import React from 'react'
import Contador from '../components/ItemCount'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Cart () {
    return (
        <Router>
            <Switch>
                <Route path='/carrito' exact>
                    <Contador/>
                </Route>
            </Switch>
        </Router>        
    )
}

export default Cart
