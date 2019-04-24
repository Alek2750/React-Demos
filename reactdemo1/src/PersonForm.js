import React from "react"
import './App.css';

class PersonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: { fname: "", lname: "", password: "", age: "", email: "" }
        };
        // Since handlesubmit is not an arrow function, this must be done
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    // handlesubmit without an arrow function
    /*handleSubmit(evt) {
        evt.preventDefault();
        window.alert(JSON.stringify(this.state.person));
    }*/

    handleSubmit = (evt) => {
        evt.preventDefault();
        window.alert(JSON.stringify(this.state.person));
    }

    handleInput = (event) => {
        const target = event.target;
        const prop = target.id;
        var value = target.value;
        var p = this.state.person;
        p[prop] = value; //Make sure you understand this
        this.setState({
            person: p
        });
    }

    render() {
        return (
            <div style={{padding:10}}>
                <form onSubmit={this.handleSubmit} >
                    <input id="fname" type="text" value={this.state.person.fname}
                        placeholder="firstname" onChange={this.handleInput} />
                    <br />
                    <input id="lname" type="text" value={this.state.person.lname}
                        placeholder="lastname" onChange={this.handleInput} />
                    <br />
                    <input id="password" type="password" value={this.state.person.password}
                        placeholder="password" onChange={this.handleInput} />
                    <br />
                    <input id="age" type="number" value={this.state.person.age}
                        placeholder="Age" onChange={this.handleInput} />
                    <br />
                    <input id="email" type="text" value={this.state.person.email}
                        placeholder="email" onChange={this.handleInput} />
                    <br />
                    <button >Submit</button>
                </form>
                <p>{JSON.stringify(this.state.person)}</p>
            </div>
        );
    }
}

export default PersonForm;