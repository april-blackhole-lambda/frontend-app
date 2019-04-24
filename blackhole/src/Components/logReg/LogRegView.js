import React from 'react';
import Login from './Login';
import Registration from './Registration';

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
        )
    }
}