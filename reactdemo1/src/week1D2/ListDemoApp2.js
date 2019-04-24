import React from 'react';

function MemberTable({ members }) {
    return (
      <table></table>
    );
  }
  
  
  function MemberDemo(props) {
    return (
      <div>
        <h4>All Members</h4>
      </div>
    );
  }
  
  export default class App extends React.Component {
    state = { members : [ {name : "Peter", age: 18},
                          {name : "Jan", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Martin", age: 22}] };
    render() {
      return (<MemberDemo members={this.state.members} />);
    }
  }
  