import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import * as WinesService from './services/Methods';

class LikeButton extends Component{

    state = { // if you don't define an initial state, your state will be null
      liked: false
    };

  /*mise à jour des nouvelles propriété, dans le cas où le vin reçoit un like ou un unlike*/
  componentWillReceiveProps(nextProps){
    if (nextProps.wine !== this.props.wine){
      WinesService.isWineLiked(nextProps.wine.id)
        .then(liked=> this.setState({liked: liked.like}));
    }
  } 

  /*fonction qui permet de changer le linke en unlike*/
  changeLikeStatut(id){
    if (this.state.liked){  //si la valeur du like= false
      WinesService.unlikeWine(id) //alors la methode unLikeWine est executé
      .then (liked=>this.setState({liked: false})); //ceci met la valeur du like dans le server à false
    }
    else {
      WinesService.likeWine(id)
      .then(liked=>this.setState({liked: true}));
    };
  }

  render() {
    return (
      <div>
        {this.state.liked ? // si la variable liked est false; et dans le cas où l'utilisateur clique sur le bouton Like, l'instruction ci-dessous s'execute et change le like en unlike
          <button type="button" onClick = {this.changeLikeStatut.bind(this)}>Unlike  
          <a className="waves-effect waves-teal btn-flat">
            <span>Unlike <i className="material-icons left">thumb_down</i></span>
          </a>
          </button>
            : //sinon c'est celle-ci s'execute
            <button type="button" onClick = {this.changeLikeStatut.bind(this)}>Like
          <a className="waves-effect waves-teal btn-flat">
            <span>Like <i className="material-icons left">thumb_up</i></span>
          </a>
          </button>
        }
      </div>
    )
    
  }
}


export default LikeButton;
/*
bind(this) car la methode n'appartient pas à la classe, donc bind(this) indique que l'objet mis dans le click correspond à l'objet passé
*/
/*
fonction qui permet d'incremeter le like
        
        <IncrementButton
          count={this.state.count}
          incrementCounter={this.incrementCounter}/>  
//classe IncrementButton
class IncrementButton extends Component{
  render(){
    return(
      <button type="button" onClick ={this.props.incrementCounter}>Like</button>
     // <button type="button" onClick ={this.props.incrementCounter}>{this.props.count}</button>
    )
  }
}

      if (this.props.liked)
    return (
      <div>
        <button type="button" onClick ={this.props.state}>Like
        <a className="waves-effect waves-teal btn-flat">
          <span>Like <i className="material-icons left">thumb_down</i></span>
        </a>        
        </button>
      </div>
    );
    else 
    <button type="button" onClick ={this.props.state}>Like
    <a className="waves-effect waves-teal btn-flat">
      <span>Like <i className="material-icons left">thumb_up</i></span>
    </a>    
    </button>
  }
}

*/