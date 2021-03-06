import React from "react"


export default class Reservation extends React.Component {
    state = {
        payByCreditCard: true, firstName: "",
        lastName: "",email: "",phone: "",street: "",city: "",zip: "", country: "",
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        window.alert(JSON.stringify(this.state));
    }

    handleChange = event => {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;
      this.setState({
        [name]: value
      });
    };
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Pay by Credit Card: 
              <input name="payByCreditCard" type="checkbox" 
                checked={this.state.payByCreditCard}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <input name="firstName" value={this.state.firstName}
                   onChange={this.handleChange} placeholder="First Name"/>
                   <br />
            <input name="lastName" value={this.state.lastName}
                   onChange={this.handleChange} placeholder="Last Name"/>
                   <br />
            <input name="email" value={this.state.email}
                   onChange={this.handleChange} placeholder="Email"/>
                   <br />
            <input name="phone" value={this.state.phone}
                   onChange={this.handleChange} placeholder="Phone nummer"/>
                   <br />
            <input name="street" value={this.state.street}
                   onChange={this.handleChange} placeholder="Street Name"/>
                   <br />
            <input name="city" value={this.state.city}
                   onChange={this.handleChange} placeholder="City"/>
                   <br />
            <input name="zip" value={this.state.zip}
                   onChange={this.handleChange} placeholder="Zip code"/>
                   <br />
            <input name="country" value={this.state.country}
                   onChange={this.handleChange} placeholder="Country"/>
            <button >Submit</button>
          </form>
          <p>{JSON.stringify(this.state)}</p>
        </div>
      );
    }
  }
  