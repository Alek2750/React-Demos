import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Home.js';
import All from './All.js';
import Details from './Details.js';

class App extends Component {
  render() {
    return (

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/All" component={All} />
            <Route path="/Details/: index" component={Details} />
          </Switch>
        </Router>
    );
  }
}

export default App;

