//  import React from 'react';
//  import Blackholeform from './Home/Blackholeform';
// import Blackholes from "./Home/Blackholes"
//  import axios from 'axios';
//  import {Route, NavLink} from 'react-router-dom';

// class AppHome extends React.Component{
// constructor(props) {
//     super(props);
//     this.state = {
//       blackholes: [],
//    };
//    }
//    componentDidMount(){
//     const authorization = localStorage.getItem("token");

//     axios.create({
//        headers: {
//          "Content-Type": "application/json",
//          authorization: `${authorization}`,
//          "Access-Control-Allow-Origin": "*"
//        }
//      }).get('https://build-week-blackhole.herokuapp.com/api/notes/')
//     .then((response) => {

//      console.log(response.data)
//       this.setState(() =>({blackholes: response.data}))
//     })
//     .catch(err=>console.log(err))
//   }

//   updateblackholes = blackhole => {
//     this.setState({
//       blackholes: [...this.state.blackholes, blackhole]
//     })
//   }


//   deletePost = id => {
//     axios.delete(`https://build-week-blackhole.herokuapp.com/api/notes/${id}`)
//     .then(() => this.updatePosts())
//     .catch(err => console.log(err));
//   }




//     render() {
//         return (
//           <div className="App">
//            <div className ='Nav'>
//           <NavLink className = 'nav-item'to='/'>Home</NavLink>
//           <NavLink className = 'nav-item'to='/blackholeform'>Create Note</NavLink>
//       </div>
//         <Route
//          path="/blackholeform"
//         render={(props) =>(
//         <Blackholeform {...props}
//         blackholes={this.state.blackholes}
//         updateBlackholes={this.updateblackholes}
//         />
//       )}
//       />
//         <Route
//         exact path="/"
//         render={(props) =>(
//         <Blackholes {...props} blackholes={this.state.blackholes} />
//       )}
//       />




// </div>
// );
// }
// }
// export default AppHome;