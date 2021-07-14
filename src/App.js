import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Somos from './pages/nosotros';
import Home from './pages/index';
import carrito from './pages/carrito';
import ItemListContainer from './components/Navbar/ItemListContainer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home titulo='Bienvenido! :D Tarea2' /> 
        </Route>
        <Route path='/nosotros' exact component={Somos} />
        <Route path='/carrito' exact component={carrito} />
      </Switch>
    </Router>
  );
}

export default App;
