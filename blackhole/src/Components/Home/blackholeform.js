import React, { Component } from 'react';
import axios from 'axios'

class Blackholeform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      category: '',
      days_to_destruct: '',
      _id: null
    };
  }

  addBlackhole = event => {
    event.preventDefault();
    const newBlackhole = {
      title: this.state.title,
      text: this.state.text,
      category: this.state.category,
      days_to_destruct: new Date().getTime()+this.state.days_to_destruct*1000*60*60*24,
      user_id: localStorage.getItem('user_id')
    }

const authorization = localStorage.getItem("token");

 axios.create({
    headers: {
      authorization: `${authorization}`,
      "Access-Control-Allow-Origin": "*"
    }
  })
    .post('https://build-week-blackhole.herokuapp.com/api/notes/',newBlackhole)
    .then(response => {
      console.log("Response!!!",response.data);    
      this.props.updateBlackholes(response.data);
      this.props.history.push('/')
    })
    .catch(err => console.log(err));

    
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
            required
          />

          <input
            onChange={this.handleInputChange}
            placeholder="text"
            value={this.state.text}
            name="text"
            required
          />

          <input
            onChange={this.handleInputChange}
            placeholder="category"
            value={this.state.category}
            name="category"
            required
          />

<input
            onChange={this.handleInputChange}
            placeholder="days to destruct"
            value={this.state.days_to_destruct}
            name="days_to_destruct"
            required
          />
         
          <button type="submit">Add to the orbit</button>
        </form>
      </div>
    );
  }
}

export default Blackholeform;
