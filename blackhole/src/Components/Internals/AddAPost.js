import React from 'react';
import {connect} from 'react-redux';
import {addPost} from '../../Actions';
import { format } from 'path';


class AddAPost extends React.Component{
    state = {
    post: {
        userID: this.props.userID,    
        text: '',
            expDate: format(mm/dd),
            timeOut: 30,
        }
    };

    //handlechanges: this.setstate sets e.target.name: e.target value in this.state.text

    //submitPost: this.props.addPost(this.state.text);

    //render(){  a form, onchange = this.handlechanges, value = the state of the message, the length of the timeout, etch}  <button onclick this.submitPost()


}

const mapStateToProps = state => {
    return {
        username: state.login.username,
        userID: state.login.userID
    };
};

//export default connect(mapstatetoprops, {addPost})(AddAPost);