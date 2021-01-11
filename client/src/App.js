import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Product from "./Pages/Product";
import ProductsList from "./Pages/ProductsList";
import Admin from './Pages/Admin';
import ProductRegist from './Pages/ProductRegist';
import ShoppingCart from './Pages/ShoppingCart';
import Payment from './Pages/Payment';
import Mypage from './Pages/Mypage';
import MainNav from './Components/MainNav';
import SubNav from './Components/SubNav';


function App() {
  // const [user,setUser]=useState(null);
  // const authenticated =user !=null;
  // const login =({id, password}) => setUser(signIn({id,password}));
  // const logout=()=>setUser(null);


  return (
    <div>
      <MainNav />
      <SubNav />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/product" component={Product} />
          <Route path="/productslist" component={ProductsList} />
          <Route path="/admin" component={Admin} />
          <Route path="/regist" component={ProductRegist} />
          <Route path="/shoppingcart" component={ShoppingCart} />
          <Route path="/payment" component={Payment} />
          <Route path="/mypage" component={Mypage} />
          <Route path='/kakao' component={() => { window.location.href = 'https://compmath.korea.ac.kr'; return null; }} />
          <Redirect path="/" to="/" />
        </Switch>
      </Router>
    </div>

  )


}

export default App;
