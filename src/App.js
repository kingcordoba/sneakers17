import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Somos from './pages/nosotros';
import ItemListContainer from './components/Navbar/ItemListContainer';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/nosotros' exact component={Somos} />
      </Switch>
    </Router>
  );
}

export default App;
