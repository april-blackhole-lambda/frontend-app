
import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import './App.css';
// import Blackholeform from './Components/Home/Blackholeform';
// import Blackholes from './Components/Home/Blackholes';
// import axios from 'axios';
import LogRegView from './Components/logReg/LogRegView';
import Registration from './Components/logReg/Registration';
import Authenticate from './Components/logReg/Authentication';
import Login from './Components/logReg/Login';
import LogRegNav from './Components/logReg/LogRegNav';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     blackholes: [],
  //   };
  // }
 
  componentDidMount(){
        if (!localStorage.getItem("token") && window.location.pathname !== "/register")
     this.props.history.push('/login');
    console.log(window.location.pathname);
    console.log(localStorage);
  }
  //   axios.get('https://build-week-blackhole.herokuapp.com/api/notes/')
  //   .then((response) => {
  //     console.log(response.data)
  //     this.setState(() =>({blackholes: response.data}))
  //   })
  //   .catch(err=>console.log(err))
  // }

  // updateblackholes = blackholes => {
  //   this.setState({
  //     blackholes
  //   })
  // }

  // handleSubmit = post => {
  //   axios.post(,post)
  //   .then(() => this.updatePosts())
  //   .catch(err => console.log(err));
  // }

  // deletePost = id => {
  //   axios.delete($`{https://build-week-blackhole.herokuapp.com/api/notes/:id}`)
  //   .then(() => this.updatePosts())
  //   .catch(err => console.log(err));
  // }

  // editPost = ('https://build-week-blackhole.herokuapp.com/api/notes/:id', id) => {
  //   axios
  //   .put()
  //   .then(() => this.updatePosts())
  //   .catch(err => console.log(err));
  // }

  render() {
    return (
      <div className="App">
      {/* <div className ='Nav'>
          <NavLink className = 'nav-item'to='/'>Home</NavLink>
          <NavLink className = 'nav-item'to='/blackholeform'>Create Note</NavLink> <LogRegNav />
      </div>    */}
      <LogRegNav />
 <Switch>
                    <Route exact path="/login"
                        render={(props) => (
                            <Login
                            {...props}
                                handleChanges={this.props.handleChange}
                                signIn={this.props.signIn}
                                username={this.props.username}
                                password={this.props.password}
                                 />
                        )} />
                    
                    <Route exact path='/register' render={(props) => (
                        <Registration {...props} />
                    )}
                        />
      {/* <Route 
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
      /> */}

                </Switch> 

      </div>
    );
  }
}

//const Auth = withRouter(Authenticate(appHome)(LogRegView));

export default App;



