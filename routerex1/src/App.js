import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

const topics = [{id:"topic-1", topic:"Text for Topic-1"},
               {id:"topic-2", topic:"Another topic"},
               {id:"topic-3", topic:"Yet another Topic"},
               {id:"topic-4", topic:"Another one & another one"},
               {id:"topic-5", topic:"You can not see this hand"}];


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
  const lis = topics.map(t=><li key={t.id}><Link to={`${match.url}/${t.id}`}>{t.id}</Link></li>)
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>

      <Route path={`${match.path}/:topicId`}
            render={(props) => 
          <Topic {...props} theTopic={topics.find(t=>t.id === props.match.params.topicId)} />} />

      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match, theTopic }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
      <p>{theTopic.topic}</p>
    </div>
  );
}

export default BasicExample;
