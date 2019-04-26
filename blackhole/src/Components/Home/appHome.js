

    import React from 'react';
    import {Route, NavLink} from 'react-router-dom';
    import './App.css';
    import Blackholeform from './Components/Home/Blackholeform';
    import Blackholes from './Components/Home/Blackholes';
    import axios from 'axios';
    
    import React from 'react';

class appHome extends React.Component{
      constructor(props) {
        super(props);
        this.state = {
          blackholes: [],
        };
      }
     
      componentDidMount(){
        axios.get('https://build-week-blackhole.herokuapp.com/api/notes/')
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
    
      handleSubmit = post => {
        axios.post(,post)
        .then(() => this.updatePosts())
        .catch(err => console.log(err));
      }
    
      deletePost = id => {
        axios.delete($`{https://build-week-blackhole.herokuapp.com/api/notes/:id}`)
        .then(() => this.updatePosts())
        .catch(err => console.log(err));
      }
    
      editPost = ('https://build-week-blackhole.herokuapp.com/api/notes/:id', id) => {
        axios
        .put()
        .then(() => this.updatePosts())
        .catch(err => console.log(err));
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
        )
      }
}
    
export default appHome;