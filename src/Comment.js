import React, { Component } from 'react';
import propTypes from 'prop-types';
import * as Winesservices from './services/Methods';

class Comment extends Component{
    
    static propTypes = {
        comment: propTypes.object
    };
    
    componentWillReceiveProps(nextProps){
        if (nextProps.wine !== this.props.wine){
            Winesservices.fecthComments(nextProps.wine.id)
                .then(comments => this.setState({comments: comments}));
        }
    }


    render(){
        return(
            <p className="comment" data-title="title of the comment" data-date="date of the comment">
                A very nice comment
            </p>
        )
    }

}

export default Comment;