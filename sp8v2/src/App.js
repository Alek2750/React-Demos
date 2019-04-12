import React, { Component } from 'react';
import {BrowserRouter, Router, Route, Link, NavLink, Switch } from "react-router-dom";

import './App.css';

function Header() {
  return (
    <ul className="header">
      <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
      <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
    </ul>
  )
}

function Home() {
  return (
    <div>
      <h1>Hello from Home</h1>
    </div>
  )
}
class Product extends Component {
  render() {
    return (
      <h1>Hello from Product</h1>
    );
  }
};


function Company() {
  return (
    <div>
      <h1>Hello from Company</h1>
    </div>
  )
}

function NoMatch() {
return(
  <div>
    <h1>
      NoMatch found
    </h1>
  </div>
)
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header />
      <Switch >
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Product} />
          <Route path="/company" component={Company} />
          <Route component={NoMatch}/>
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}


export default App;
