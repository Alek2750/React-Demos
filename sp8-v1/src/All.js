import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";

//import data from './data/data.json';

class All extends Component {
    constructor() {
        super();
        this.state = { data: [], User: { gender: '', title: '', first: '', last: '', street: '', city: '', state: '', zip: '', email: '', dob: '', phone: '', cell: '', picture: [] } };
    }
    fetchData = async () => {
        await fetch('http://localhost:4000/users')
            .then((response) =>
                response.json())
            .then((data) => {
                console.log(data);
                this.setState({ data });
            })
    }
    componentDidMount = async () => {
        const jsonData = await fetch('http://localhost:4000/users');
        const data = await jsonData.json();
        this.setState({ data });
    }

    render() {

        return (<div>
            <h1 className='h1'>Here is a list of all Users:</h1>
            {this.state.data.map((user,id) => <li key={user.first}>
            <img src={user.picture.thumbnail} alt="" /> {user.title}. {user.first} {user.last} 
                <Link to={`/Details/${id}`}>Details</Link>
            </li>)}
            <Link to="/">Home</Link></div>)

    }
}
export default All;