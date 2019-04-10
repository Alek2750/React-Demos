import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <ul className="header">
      <li>
        <NavLink exact to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/topics">Topics</NavLink>
      </li>
      <li>
        <NavLink to="/demo">Demo</NavLink>
      </li>
    </ul>
  )
}

function Demo() {
  return (
    <div>
      <h1>Header1</h1>
      <h2>Header2</h2>
      <h3>Header3</h3>
      <h4>Header4</h4>
    </div>
  )
}

function BasicExample() {
  return (
    <Router>
      <div>
        <Header />
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/demo" component={Demo} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default BasicExample;
