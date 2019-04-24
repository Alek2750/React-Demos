import React, { Component } from 'react';
import './App.css';

function App2({ data, title }) {
    const rows = data.map(s => (
        <tr key={s.id}><td>{s.id}</td><td>{s.name}</td><td>{s.grade}</td></tr>));
    return (
        <div className="App">
            <h1>{title}</h1>
            <table className="table">
                <thead>
                    <tr><th>Id</th><th>Name</th><th>Grade</th></tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    )
}

/*class App2 extends Component {
    render() {
      return (
        <div className="App">
            <h1>Hello world</h1>
        </div>
      );
    }
  }*/

export default App2;