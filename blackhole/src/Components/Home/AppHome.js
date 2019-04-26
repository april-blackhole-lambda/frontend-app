 import React from 'react';
 import Blackholeform from './Blackholeform';
import Blackholes from "./Blackholes"
 import axios from 'axios';
 import {Route, NavLink} from 'react-router-dom';
 import moment from 'moment'

class AppHome extends React.Component{
constructor(props) {
    super(props);
    this.state = {
      blackholes: [],
   };
   }



   componentDidMount(){
    const authorization = localStorage.getItem("token");

    axios.create({
       headers: {
         "Content-Type": "application/json",
         authorization: `${authorization}`,
         "Access-Control-Allow-Origin": "*"
       }
     }).get('https://build-week-blackhole.herokuapp.com/api/notes/')
    .then((response) => {

     console.log(response.data)
      this.setState(() =>({blackholes: response.data}), () => {
        this.state.blackholes.forEach(blackhole => {
          console.log(blackhole)
          console.log(moment(blackhole.days_to_destruct).fromNow());
      
          if (
            moment(blackhole.days_to_destruct)
              .fromNow()
              .includes("ago")
          ) {
            axios.create({
              headers: {
                "Content-Type": "application/json",
                authorization: `${authorization}`,
                "Access-Control-Allow-Origin": "*"
              }})
            
           
            .delete(`https://build-week-blackhole.herokuapp.com/api/notes/${blackhole.id}`)
            .then (() => axios.create({
              headers: {
                "Content-Type": "application/json",
                authorization: `${authorization}`,
                "Access-Control-Allow-Origin": "*"
              }
            }).get('https://build-week-blackhole.herokuapp.com/api/notes/')
           .then((response) => {
       
            console.log(response.data)
             this.setState(() =>({blackholes: response.data}))
           }))
            .catch(err => console.log(err));
            // this is where you make the delete request
            // axios.delete(`serverurl/${note.id}`)
            console.log("this is an old note", blackhole.title);
          }
        }
        )
      })
    })
    
    .catch(err=>console.log(err))
  }

  updateblackholes = blackhole => {
    this.setState({
      blackholes: [...this.state.blackholes, blackhole]
    })
  }


  deletePost = id => {
    axios.delete(`https://build-week-blackhole.herokuapp.com/api/notes/${id}`)
    .then(() => axios.create({
      headers: {
        "Content-Type": "application/json",
        authorization: `${localStorage.getItem('token')}`,
        "Access-Control-Allow-Origin": "*"
      }
    }).get('https://build-week-blackhole.herokuapp.com/api/notes/')
   .then((response) => {

    console.log(response.data)
     this.setState(() =>({blackholes: response.data}))})
    .catch(err => console.log(err)));
   }




    render() {
        return (
          <div className="App">
           <div className ='Nav'>
          <NavLink className = 'nav-item'to='/'>Home</NavLink>
          <NavLink className = 'nav-item'to='/blackholeform'>Create Note</NavLink>
      </div>
        <Route
         path="/blackholeform"
        render={(props) =>(
        <Blackholeform {...props}
        blackholes={this.state.blackholes}
        updateBlackholes={this.updateblackholes}
        />
      )}
      />
        <Route
        exact path="/"
        render={(props) =>(
        <Blackholes {...props} blackholes={this.state.blackholes} />
      )}
      />




</div>
);
}
}
export default AppHome;