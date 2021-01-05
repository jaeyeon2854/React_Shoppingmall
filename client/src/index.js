import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Product from "./Pages/Products";
import Admin from './Pages/Admin';
import ProductsRegist from './Pages/ProductsRegist';
import ShoppingCart from './Pages/ShoppingCart';
import Payment from './Pages/Payment';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Account from './Pages/Account';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/product"component={Product} />
        <Route path="/admin" component={Admin} />
        <Route path="/regist" component={ProductsRegist} />
        <Route path="/shoppingcart" component={ShoppingCart} />
        <Route path="/payment" component={Payment} />
        <Route path="/account" component={Account}/>
        <Route path='/kakao' component={() => {window.location.href='https://compmath.korea.ac.kr'; return null;}}/>
        <Redirect path="/" to="/" />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
