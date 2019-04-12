import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (<div className='background'><center><h1>Welcome to our friends site!</h1></center>
        <Link className='bold' to="/all">Se All Users</Link></div>)
    }
}

export default Home;