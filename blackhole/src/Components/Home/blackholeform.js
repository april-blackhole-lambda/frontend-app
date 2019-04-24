import React, { Component } from 'react';
import axios from 'axios'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(response => {
      console.log(response.data);    
      this.props.updateSmurfs(response.data);
      this.props.history.push('/')
    })
    .catch(err => console.log(err));

    
  }
  handleInputChange = e => {
    this.setState({ [e.target.title]: e.target.value });
  };

  render() {
    return (
      <div className="blackholeform">
        <form onSubmit={this.addBlackhole}>
          <input
            onChange={this.handleInputChange}
            placeholder="title"
            value={this.state.title}
            name="title"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="category"
            value={this.state.category}
            name="category"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="description"
            value={this.state.description}
            name="description"
          />
          <button type="submit">Add to the orbit</button>
        </form>
      </div>
    );
  }
}

export default blackholeform;
