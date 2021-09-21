import './index.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProjectScreen from './screens/ProjectScreen';
import CartScreen from './screens/CartScreen';
import { useSelector } from 'react-redux';

function App() {
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <div className="topnav">
          <Link to="/start">Start a project</Link>
          <Link to="/support">Support a project</Link>
          <Link to="/discover">Discover</Link>

          <Link className="logo" to="/">JIFUND</Link>

          <Link className="signin" to="/signin">Sign in</Link>
          <Link to="/signup">Create account</Link>
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
        </div>
      </header>

      <main>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/project/:id" component={ProjectScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>      
      </main>
      <footer>Copyright</footer>
    </div> 
    </BrowserRouter>
  );
}

export default App;
