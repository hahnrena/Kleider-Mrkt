import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homePage';
import ShopPage from './pages/shopPage/shopPage';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/signInUp/signInUp'
import './App.css';



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
