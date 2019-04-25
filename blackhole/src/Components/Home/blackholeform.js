import React, { Component } from 'react';
import axios from 'axios'

class Blackholeform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      category: '',
      _id: null
    };
  }

  addBlackhole = event => {
    event.preventDefault();
    const newBlackhole = {
      title: this.state.title,
      text: this.state.text,
      category: this.state.category
    }
    axios
    .post('https://build-week-blackhole.herokuapp.com/api/notes/', newBlackhole)
    .then(response => {
      console.log(response.data);    
      this.props.updateBlackholes(response.data);
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
            placeholder="text"
            value={this.state.text}
            name="text"
          />

          <input
            onChange={this.handleInputChange}
            placeholder="category"
            value={this.state.category}
            name="category"
          />
          
          <button type="submit">Add to the orbit</button>
        </form>
      </div>
    );
  }
}

export default Blackholeform;
