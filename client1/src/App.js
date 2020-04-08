import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homePage';
import ShopPage from './pages/shopPage/shopPage';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/signInUp/signInUp';
import CheckoutPage from './pages/checkout/checkOut';

import { auth, createUserProfileDocument } from './firebase/utils/firebase';
import { setCurrentUser } from './redux/actions/user';
import { selectCurrentUser } from './redux/selectors/userSelector';

import './App.css';

const ContactPage = () => (
  <div>
    CONTACT PAGE
  </div>
);


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          });
          // console.log(this.state)
      } else {
        setCurrentUser(userAuth);
      }
    });
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}

  const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
  })

 const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
 })

export default connect(mapStateToProps, mapDispatchToProps)(App);



