import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Router } from 'react-router-dom';
import Login from './Login'
import LogoutButton from './LogoutButton'
import {signIn} from './auth'


function App() {
  const [user,setUser]=useState(null);

  const authenticated =user !=null;

  const login =({id, password}) => setUser(signIn({id,password}));

  const logout=()=>setUser(null);


}

export default App;
