import React from 'react';
import Login from './Login';
import Registration from './Registration';
import {Route, Switch} from 'react-router-dom';
import LogRegNav from './LogRegNav';

class LogRegView extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div>
              <LogRegNav />


             
                </div>
        );
    }
}

export default LogRegView;