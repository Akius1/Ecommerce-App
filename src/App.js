import React from 'react'
import "./App.css";
import Homepage from "./pages/homepage/Homepage.component";

import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/Shop.component";
import Header from "./components/Header/header.component";
import SignInAndSignUpPage from "./pages/signIn-signUp/signin-signup.component";

import { auth } from './firebase/firebase.utils'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  
  render() {
    return (
    <div>
        <Header currentUser={ this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div> 
  );
  }
  
}

export default App;
