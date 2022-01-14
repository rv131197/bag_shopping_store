import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/components/header/header.component";
import { HomePage } from "./components/pages/homePage/homepage.component";
import ShopPage from "./components/pages/shop/shop.component";
import SignInSignUpPage from "./components/pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // takes a ftn where the parameter is what the user state is of the auth on our firebase project

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth); // we need to check if our db has updated at that reference with any new data
        userRef.onSnapshot(snapshot => { // with this objetc, get the data related to userRef
          console.log(snapshot)  // has id
          console.log(snapshot.data()) // doesn't have id, need to combine both of above

          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        }) // it sends the snapshot object representing data stored in db, the moment code runs
      }else{
        this.setState({currentUser: userAuth})
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
