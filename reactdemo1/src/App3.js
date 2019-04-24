import React, { Component } from 'react';
import './App.css';




function Hello(props) {
  const {msg} = props;
  return <h1>{msg}</h1>
}



class App extends Component {

  render() {
    return (
      <div className="App">
        <h1> Hello World, what a good day</h1>
        <Hello msg="Hello World"/>
        
      </div>
    );
  }
}

export default App;
