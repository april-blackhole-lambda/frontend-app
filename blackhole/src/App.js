
import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import './App.css';
import LogRegView from './Components/logReg/LogRegView';
import Registration from './Components/logReg/Registration';
import Authenticate from './Components/logReg/Authentication';
import Login from './Components/logReg/Login';
import LogRegNav from './Components/logReg/LogRegNav';
import {withRouter} from 'react-router';
import AppHome from './Components/Home/appHome';
class App extends React.Component {
 
 
  componentDidMount(){
        if (!localStorage.getItem("token") && window.location.pathname !== "/register")
     this.props.history.push('/login');
    console.log(window.location.pathname);
    console.log(localStorage);
  }
 

  render() {
    return (
      <div className="App">
     <LogRegView />
      </div>
    );
  }
}

const Auth = withRouter(Authenticate(AppHome)(LogRegView));

export default App;



