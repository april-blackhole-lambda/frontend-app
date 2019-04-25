

// import React from 'react';
// import {Route, Switch, NavLink} from 'react-router-dom';
// import './App.css';
// import LogRegView from './Components/logReg/LogRegView';
// import Registration from './Components/logReg/Registration';
// import Authenticate from './Components/logReg/Authentication';
// import Login from './Components/logReg/Login';
// import LogRegNav from './Components/logReg/LogRegNav';
// import {withRouter} from 'react-router';
// import AppHome from './Components/Home/appHome';
// class App extends React.Component {


//  componentDidMount(){
//        if (!localStorage.getItem("token") && window.location.pathname !== "/register")
//     this.props.history.push('/login');
//    console.log(window.location.pathname);
//    console.log(localStorage);
//  }


//  render() {
//    return (
//      <div className="App">
//     <LogRegView />
//      </div>
//    );
//  }
// }

// const Auth = withRouter(Authenticate(AppHome)(LogRegView));

// export default App;


// class LogRegView extends React.Component {
//    constructor (props) {
//        super(props);
//        this.state = {}
//    }

//    render(){
//        return(
//            <div>
//              <LogRegNav />



// <Switch>
//                    <Route exact path="/login"
//                        render={(props) => (
//                            <Login
//                            {...props}
//                                handleChanges={this.props.handleChange}
//                                signIn={this.props.signIn}
//                                username={this.props.username}
//                                password={this.props.password}
//                                 />
//                        )} />

//                    <Route exact path='/register' render={(props) => (
//                        <Registration {...props} />
//                    )}
//                        />


//                </Switch>


//               //  </div>
//       //  );
//   //  }
// // }

// // export default LogRegView;