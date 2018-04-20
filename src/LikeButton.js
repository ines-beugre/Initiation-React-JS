import React, {Component} from 'react';
import PropTypes from 'prop-types'; 

class LikeButton extends Component{
    state = { // if you don't define an initial state, your state will be null
    count: 0
  };

  incrementCounter = () => {
    this.setState({ count: this.state.count + 1 }); // trigger a component redraw
  };

  render() {
    return (
      <div>
        <h3>the count is : {this.state.count}</h3>
        <IncrementButton
          count={this.state.count}
          incrementCounter={this.incrementCounter}/>    
      </div>
    );
  }
}

class IncrementButton extends Component{
  render(){
    return(
      <button type="button" onClick ={this.props.incrementCounter}>Like</button>
     // <button type="button" onClick ={this.props.incrementCounter}>{this.props.count}</button>
    )
  }
}

export default LikeButton;