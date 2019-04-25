
import React from 'react';
import Authenticate from './Components/logReg/Authentication';
import Login from './Components/logReg/Login';
import {withRouter} from 'react-router-dom';
import appHome from './Components/Home/appHome';
import './App.css';
import LogRegView from './Components/logReg/LogRegView';
import Registration from './Components/logReg/Registration';
import {Route, Switch} from 'react-router';
import LogRegNav from './Components/logReg/LogRegNav';


class App extends React.Component{
  componentDidMount() {
    if (!localStorage.getItem("token") && window.location.pathname !== "/register")
     this.props.history.push('/login');
    console.log(window.location.pathname);
    console.log(localStorage);
  }

  render(){
  return (
    <div className="App">
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
                </Switch> 
    </div>
  );
}
}
const Auth = withRouter(Authenticate(appHome)(LogRegView));


export default withRouter(App);