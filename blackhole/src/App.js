
import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import './App.css';
import Blackholeform from './Components/Home/Blackholeform';
import Blackholes from './Components/Home/Blackholes';
import axios from 'axios';

class App extends React.Component {
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

  componentDidUpdate(prevProps, prevState) {
  if (prevState.title === '' || this.props.match.params.id !== prevProps.match.params.id) {
    const post = this.props.post.find(
      post => `${post._id}` === this.props.match.params.id
    );
    this.setState(post);
  }
  }
handleEditSubmit = event => {
  event.preventDefault();
  this.props.onSubmit({
    title: this.state.title,
    text: this.state.text
  },
  this.state._id);
  this.props.history.push('/');
  };
}
  updateblackholes = blackholes => {
    this.setState({
      blackholes
    })
  }

  render() {
    return (
      <div className='edit-view'>
      <form onSubmit={this.handleEditSubmit}>
      <h2>Edit</h2>
      <input
      type='text'
      name='title'
      placeholder='post title'
      value={this.state.title}
      onChange={this.handleInputChange}
      required/>
      <text
      name='textBody'
      placeholder='post.content'
      value={this.state.textBody}
      onChange={this.handleInputChange}
      />
      <button className='btn' type='submit'>Update</button>
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
      </form>
      </div>
    );
  }
}

export default App;




// class App extends React.Component{
//   componentDidMount() {
//     console.log(window.location.pathname);
//     console.log(localStorage);
//   }

//   render(){
//   return (
//     <div className="App">
//       <Auth />
//     </div>
//   );
// }
// }
// const Auth = withRouter(Authenticate(HomeView)(LogRegView));


// export default withRouter(App);