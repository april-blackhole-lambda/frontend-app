import React from 'react';
import Login from './Login';
import Registration from './Registration';
import {Route, Switch} from 'react-router-dom';
import LogRegNav from './LogRegNav';
import '../logReg/logReg.css';
import '../../App.css';

class LogRegView extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div>
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

export default LogRegView;