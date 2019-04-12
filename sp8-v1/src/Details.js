import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import data from './data/data.json';

/*class Details extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    render() {
        const user = data.users;
        const props = this.props;
        const match = props.match;
        const index = match.params.id;

        return (<div><h1>Details for {user[index].title}. {user[index].first} {user[index].last}</h1>
            Street: {user[index].street} <br/>
            City: {user[index].city}<br/>
            State: {user[index].state}<br/>
            Zip: {user[index].zip}<br/>
            Email: {user[index].email}<br/>
            Date of Birth: {user[index].dob}<br/>
            Phone: {user[index].phone}<br/>
            Cell: {user[index].cell}<br/>
            Picture: <br/><img src={user[index].picture.large} alt="" /><br/>
            <Link to="/AllUsers">Back</Link>
        </div>
        )
    }
}*/

function Details({ match }) {
    const lis = data.user.map(user=><li key={user.first}><Link to={`${match.url}/${user.first}`}>{user.first}</Link></li>)
    return (
      <div>
        <h2>Details</h2>
        <ul>
          {lis}
        </ul>
  
        <Route path={`${match.path}/:index`}
              render={(props) => 
            <Detail {...props} thePerson={data.find(user=>user.first === props.match.params.index)} />} />
  
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  }
  
  function Detail({ match, thePerson }) {
    return (
      <div>
        <h3>{match.params.index}</h3>
        <p>{thePerson.detail}</p>
      </div>
    );
  }
export default Details;