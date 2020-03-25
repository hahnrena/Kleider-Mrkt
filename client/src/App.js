import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homePage';
import ShopPage from './pages/shopPage/shopPage';
import './App.css';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
