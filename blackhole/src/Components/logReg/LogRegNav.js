
import React from 'react';
import {Nav, NavLink } from 'react-router-dom';

import Registration from './Registration';
import Login from './Login';

const LogRegNav =() => {
    return (
        <div id = "nav">
            
                <NavLink to="/login"> Log In </NavLink>
                <NavLink to="/register"> Sign Up</NavLink>
        
        </div>
    );
}

export default LogRegNav;  
