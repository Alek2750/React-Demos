import React, { Component } from 'react';
import facade from "./UserFacade";

//import '../App.css';

class App extends Component {
    state = { users: [] }


    addUser = async () => {
        const user = {
            age: 30,
            name: "Alek Pog",
            gender: "male",
            email: "alek798@gmail.com"
        }
        const userNew = await facade.addUser(user);
        window.alert(JSON.stringify(userNew));
        // Måde 1, for at opdatere liste med det samme.
        this.getUsers();
    }
    deleteUser = async ()=>{
        await facade.deleteUser(116);
        this.getUsers();
    }

    getUsers = async () => {
        try {
            const users = await facade.getUsers();
            this.setState({ users: users });
        } catch (err) {
            if (err.status) {
                const full = await err.fullError;
                this.setState({ error: full.msg })
            } else {
                this.setState({ error: "Server is DOWN" })
            }
        }
    }

    componentDidMount() {
        this.getUsers();
    }
    render() {
        const lis = this.state.users.map(u => <li key={u.id}>{u.name}</li>)
        return (
            <div className="App">
                <h3>Users</h3>
                <ul>
                    {lis}
                </ul>
                <button onClick={(e) => { this.addUser() }}>Add User</button>
                <button onClick={(e) => { this.deleteUser() }}>DELETE User</button>
                <p style={{ color: "red" }}>{this.state.error}</p>
            </div>
        );
    }
}

export default App;
