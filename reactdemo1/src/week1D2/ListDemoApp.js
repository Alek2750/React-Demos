import React from 'react';

/*
får denne fejl, af at copy paste koden fra opgaven.
Objects are not valid as a React child (found: object with keys {listItems}). If you meant to render a collection of children, use an array instead.
    in NumberList (at ListDemoApp.js:11)
    in div (at ListDemoApp.js:9)
    in ListDemo (at ListDemoApp.js:18)
    in App (at src/index.js:26)
*/

function NumberList({numbers}) {
    const listItems = numbers.map((n) => <p>{n}</p>);
    return {listItems};
  }
  function ListDemo(props) {
    return (
      <div>
        <h2>All numbers passed in via props</h2>
        <NumberList numbers={props.numbers} />
      </div>
    );
  }
  export default class App extends React.Component {
    state = {numbers : [1,2,3]}
    render() {
      return <ListDemo numbers={this.state.numbers} />;
    }
  }
  