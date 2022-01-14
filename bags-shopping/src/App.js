import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/components/header/header.component';
import { HomePage } from './components/pages/homePage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import SignInSignUpPage from './components/pages/sign-in-sign-up/sign-in-sign-up.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
      <Route exact path="/signin" component={SignInSignUpPage} />
     </Switch>
    </div>
  );
}

export default App;
