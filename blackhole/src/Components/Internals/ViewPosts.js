import React from 'react';
import { connect } from 'http2';

class ViewPosts extends React.Component{

}


mapStateToProps = state => {
    return{
        posts: state.poste.postes,
        userID: state.login.userID
    };
};

export default connect(
    mapStateToProps, {fetchingPosts, addAPost})(ViewPosts);