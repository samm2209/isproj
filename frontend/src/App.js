import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProjectScreen from './screens/ProjectScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <div className="topnav">
          <a href="/start">Start a project</a>
          <a href="/support">Support a project</a>
          <a href="/discover">Discover</a>

          <a className="logo" href="/">JIFUND</a>

          <a className="signin" href="/signin">Sign in</a>
          <a href="/signup">Create account</a>
        </div>

        <div className="submenu">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <a href="/categories">Categories</a>
          <a href="/how">How it Works</a>
          <a href="/about">About</a>
        </div>
      </header>

      <main>
        <Route path="/project/:id" component={ProjectScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>      
      </main>
      <footer>Copyright</footer>
    </div> 
    </BrowserRouter>
  );
}

export default App;
