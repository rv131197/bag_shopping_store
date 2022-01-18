import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/components/header/header.component";
import { HomePage } from "./components/pages/homePage/homepage.component";
import ShopPage from "./components/pages/shop/shop.component";
import SignInSignUpPage from "./components/pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import {connect} from 'react-redux';
import {setCurrentUser} from '../src/redux/user/user.action';
 
class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // takes a ftn where the parameter is what the user state is of the auth on our firebase project

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth); // we need to check if our db has updated at that reference with any new data
        userRef.onSnapshot(snapshot => { // with this objetc, get the data related to userRef
          console.log(snapshot)  // has id
          console.log(snapshot.data()) // doesn't have id, need to combine both of above

          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          })
        }) // it sends the snapshot object representing data stored in db, the moment code runs
      }else{
        setCurrentUser(userAuth)
      }
      // createUserProfileDocument(user) //firing this with the user we got
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // this will close the subscription
  }

  render() {
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
}

const mapDispatchToProps = dispatch => ({ //passing in a prop, that dispatches new action
  setCurrentUser: user => dispatch(setCurrentUser(user)) // dispatching a user object
})

export default connect(null, mapDispatchToProps)(App);
