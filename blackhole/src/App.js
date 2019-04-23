import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom'
import './App.css';
import blackholeform from './components/blackholeform';
import blackholes from './components/blackholes';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blackholes: [],
    };
  }
 
  componentDidMount(){
    axios.get('http://localhost:3000/blackholes')
    .then((response) => {
      console.log(response.data)
      this.setState(() =>({blackholes: response.data}))
    })
    .catch(err=>console.log(err))
  }

  updateblackholes = blackholes => {
    this.setState({
      blackholes
    })
  }

  render() {
    return (
      <div className="App">
      <div className ='Nav'>
          <NavLink className = 'nav-item'to='/'>Home</NavLink>
          <NavLink className = 'nav-item'to='/smurf-form'>Create Note</NavLink>
      </div>
      <Route 
         path="/blackholeform"
        render={(props) =>(
        <blackholeform {...props}   
        blackholes={this.state.blackholes}
        updateBlackholes={this.updateBlackholes}
        />
      )}
      />
        <Route 
        exact path="/"
        render={(props) =>(
        <Blackholes {...props} blackholes={this.state.blackholes} />
      )}
      />
      </div>
    );
  }
}

export default App;
