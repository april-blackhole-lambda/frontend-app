
import React from 'react';
import Authenticate from './Components/logReg/Authentication';
import Login from './Components/logReg/Login';
import {withRouter} from 'react-router-dom';
import appHome from './Components/Home/appHome';
import './App.css';
import LogRegView from './Components/logReg/LogRegView';
import Registration from './Components/logReg/Registration';

class App extends React.Component{
  componentDidMount() {
    // if (!localStorage.getItem("token") && window.location.pathname !== "/register")
    // this.props.history.push('login');
    console.log(window.location.pathname);
    console.log(localStorage);
  }

  render(){
  return (
    <div className="App">
     <LogRegView />
    </div>
  );
}
}
// const Auth = withRouter(Authenticate(appHome)(LogRegView));


export default App;