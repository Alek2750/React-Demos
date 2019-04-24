import React, { Component } from 'react';
import './App.css';

import upper, {text1,text2,text3} from "./week1D1/file1";


function Welcome(props) {
  //props.fName = "Nyt navn"; kan man ikke fordi props ikke kan ændres
  const {fName, lName} = props;
  return <h1>Welcome {fName} {lName}</h1>
}

const Welcome2 = (props) =>(
  <React.Fragment>
  <h2>Welcome {props.fName}</h2>
  <h2>Welcome again {props.fName}</h2>
  </React.Fragment>
)

class App extends Component {
  constructor(){
    super();
    this.state = {count: 0}
  }

  componentDidMount(){
    setInterval(()=>{
      let oldVal = this.state.count;
      this.setState({count:++oldVal})
    },1000);
  }

  render() {
    return (
      <div className="App">
        <h1> Hello World, what a good day</h1>
        <Welcome fName="Kurt" lName="Jensen"/>
        <Welcome fName="Hanne"/>
        <Welcome2 fName="Lars"/>
        <h3>Count: {this.state.count}</h3>
        <p>{upper("please uppercase me")}</p>
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
      </div>
    );
  }
}

export default App;
