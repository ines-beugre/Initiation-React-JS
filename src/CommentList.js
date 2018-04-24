import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Winesservices from './services/Methods';
import Comment from './Comment';

class CommentList extends Component{

    static PropTypes = {
        wine : PropTypes.object
    };
    state = {
        comments : []
    };

    componentWillReceiveProps(nextProps){
        console.log(nextProps.comments);
        }
    
    render(){  
        return(
            <div >
                            <h5>Comments</h5>
                            <Comment  
                                wine={this.state.wine}
                            /> 
            </div>
              
        )
    }

}

export default CommentList;