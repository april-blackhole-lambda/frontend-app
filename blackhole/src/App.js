
import React from 'react';
import {withRouter} from 'react-router-dom';

import './App.css';

class App extends React.Component{
  componentDidMount() {
    console.log(window.location.pathname);
    console.log(localStorage);
  }

  render(){
  return (
    <div className="App">
      <Auth />
    </div>
  );
}
}
const Auth = withRouter(Authenticate(HomeView)(LogRegView));


export default withRouter(App);