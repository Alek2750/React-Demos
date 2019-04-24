import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Single Source of Truth'};
  
    }
  
    handleChange = (event) => {
      this.setState({value: event.target.value});
    }
  
    handleSubmit = (event) => {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} /><br />
          </label> 
          <input type="submit" value="Submit" />
          <p>{this.state.value.toUpperCase()}</p>
        </form>
      );
    }
  }

  export default NameForm;