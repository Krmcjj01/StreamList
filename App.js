import React from "react";
import { BrowswerRouter as Router, Route, Switch } from "react-router-dom";
import StreamListfrom "./components/StreamList";
import Movies from "./components/Movies";
import Cart from "./components/Cart";
import About from "./components/About";
import Navbar from "./components/Navbar";
import "./styles.css";
import UserEvents from './UserEvents';

export default function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={StreamList} />
          <Route path="/movies" component={Movies} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
          </Switch>
        </Router>
  );
}

<nav> 
  <ul>
    <li><span className="material-icons">home</span> Home</li>
    <li><span className="material-icons">movie</span> Movies</li>
    <li><span className="material-icons">shopping_cart</span> Cart</li>
    <li><span className="material-icons">info</span> About</li>
    </ul>
    </nav>
  
  // src/App.js
  import React from 'react';
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  import Movies from './Movies';
  import Cart from './Cart';
  import Home from './Home'; // Your existing component

  const App = () => {
    return (
      <Router>
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/cart" component={Cart} />
          <Route path="/" component={Home} />
          </Switch>
          </Router>
    );
  };

  export default App;