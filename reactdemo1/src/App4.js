import React, { Component } from 'react';
import './App.css';

import {names} from "./week1D1/file2";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function WelcomePerson(props) {
    const { firstName, lastName, email } = props.person;
    return <h1>Hello {firstName} {lastName} {email}</h1>
    //return <h1>Hello {props.person.firstName} {props.person.lastName} {props.person.email}</h1>;
}

class App extends Component {

    render() {
        return (
            <div className="App">
                <Welcome name="Sara" />
                <Welcome name="Cahal" />
                <Welcome name="Edite" />
                <WelcomePerson person={names[0]} />
            </div>
        );
    }
}

export default App;
