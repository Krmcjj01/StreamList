import React fron "react";
import { BrowswerRouter as Router, Route, Switch } from "react-router-dom";
import StreamListfrom "./components/StreamList";
import Movies from "./components/Movies";
import Cart from "./components/Cart";
import About from "./components/About";
import Navbar from "./components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Navbar>
        <Switch>
          <Route exact path="/" component={StreamList} />
          <Route path="/movies" component={Movies} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
          </Switch>
        </Router>
  );
}