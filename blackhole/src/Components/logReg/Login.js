import React from 'react';
import axios from 'axios';



class Login extends React.Component{
    constructor(props){
        super(props);
        this.setState = {
            user: {
                username: '',
                password: '',
            },
            message: ''
        }
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState.user({[e.target.name]: e.target.value});
    }

    loginSite = e => {
        e.preventDefault();
        axios.post(`${URL}/login`, this.state.user)
        .then(response => {
            console.log(response.data);

            if (response.status === 200 && response.data) {
                localStorage.setItem('token', response.data.token);
            } else {
                throw new Error('Incorrect Login Credentials');
            }
        })
        .catch(err => {
            this.setState({
                user: {
                    username: '',
                    password: ''
                }
            })
            console.log("Catch Error", err);
        })         
    }

    render() {
        return (
          <div className='login'>
            <h1>Login Page</h1>
            <form id='login' onSubmit={this.submitHandler}>
            
              <input
                type="text"
                id="username"
                name="username"
                value={this.state.user.username}
                onChange={this.handleChanges}
              />
              <input
                type="password"
                id="password"
                name="password"
                value={this.state.user.password}
                onChange={this.handleChanges}
              />
              <button type="submit">Submit</button>
            </form>
            {this.state.message
              ? (<h4>{this.state.message}</h4>)
              : undefined
            }
          </div>
        )
      }
}
 
export default Login;
