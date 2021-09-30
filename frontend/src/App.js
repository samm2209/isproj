import './index.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProjectScreen from './screens/ProjectScreen';
import CartScreen from './screens/CartScreen';
import { useDispatch, useSelector } from 'react-redux';
import SigninScreen from './screens/SigninScreen';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';

function App() {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const signoutHandler = () =>{
    dispatch(signout());
  }
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <div className="topnav">
            <Link to="/start">Start a project</Link>
            <Link to="/support">Support a project</Link>
            <Link to="/discover">Discover</Link>

            <Link className="logo" to="/">JIFUND</Link>

            
          </div>

          <div className="submenu">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <Link to="/categories">Categories</Link>
            <Link to="/how">How it Works</Link>
            <Link to="/about">About</Link>
            <Link to="/cart">Cart
              {
                cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )
              }
            </Link>
            {
              userInfo ? (
                <div className="dropdown">
                  <Link to="#">
                    {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                  </Link>
                  <ul className="dropdown-content">
                    <Link to="#signout" onClick={signoutHandler}>Log out</Link>
                  </ul>
                </div>
              ) : (
                <Link className="signin" to="/signin">Sign in</Link>
              )
            }
          </div>
        </header>

        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/project/:id" component={ProjectScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer>Copyright</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
