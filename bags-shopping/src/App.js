import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/components/header/header.component';
import { HomePage } from './components/pages/homePage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import SignInSignUpPage from './components/pages/sign-in-sign-up/sign-in-sign-up.component';
import {auth} from './firebase/firebase.utils';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => { // takes a ftn where the parameter is what the user state is of the auth on our firebase project
      this.setState({currentUser: user});

      console.log(user)
    }) 
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(); // this will close the subscription
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUpPage} />
       </Switch>
      </div>
    );
  }
}

export default App;
