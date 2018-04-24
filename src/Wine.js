import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import LikeButton from './LikeButton';
import CommentList from './CommentList';

class Wine extends Component {
    static propTypes = {
        wine: PropTypes.object,
    };
    
    static defaultProps = {
        wine : {
            id: null,
            name: null,
            type: null,
            appellation: {
              "name": null,
              "region": null
            },
            grapes: [
                null
            ]
        }
    };
    selectedWine=(id)=> {
        this.state.selectWine(id)
    };
        

/*****/
/** methode qui permet de savoir qu'on a reçu la liste des vins, MAJ des props d'une composant*/
    componentWillReceiveProps(newProps) {
        this.setState({wine: newProps.wine});
    }

  render() {
      if (this.props.wine!=null)
        return (
            <div className="col s12 m12 l6">
            <h2 className="center-align">Wine details</h2>
                <div className="card horizontal">
                  <div className="card-image">
                    <img className="responsive-img wine-detail-image" alt="Wine bottle pic" src="https://wines-api.herokuapp.com/api/wines/wine1/image" />
                  </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h3>{this.props.wine.id}</h3>
                        <div key={this.props.wine}>                       
                            <b>Appelation: </b>{this.props.wine.name }<br/>
                            <b>Region: </b>{this.props.wine.appellation.region }<br/>
                            <b>Color: </b>{this.props.wine.type}<br/>
                            <b>Grapes:</b>{this.props.wine.grapes } <br/>
                        </div>
                        <CommentList 
                        wine={this.state.wine}
                    />
                    </div>
                    <div className="card-action">

                    <LikeButton 
                        wine={this.state.wine}
                    />
                   
                    </div>
                     </div>
                </div>
            </div>
        )
    else 
    return null
    }
}

export default Wine;
/*
            <div class="card-action">
                <a class="waves-effect waves-teal btn-flat">
                  <span>Like <i className="material-icons left">thumb_up</i> (42)</span>
                </a>
            </div>


            details du vin codé en dur
                            <div className="card horizontal">
                  <div className="card-image">
                    <img className="responsive-img wine-detail-image" alt="Wine bottle pic" src="https://wines-api.herokuapp.com/api/wines/wine1/image" />
                  </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h3>Name of the Wine</h3>
                        <p><b>Appellation:</b> {this.props.wine.appellation.name}</p>
                        <p><b>Region:</b> {this.props.wine.appellation.region}</p>
                        <p><b>Color:</b> {this.props.wine.type}</p>
                        <p><b>Grapes:</b> {this.props.wine.grapes}<br/></p>
                    </div>
                    <div className="card-action"></div>
                     </div>
                </div>

details de vins codé en dur
   static defaultProps = {
        wine : {
            id: "chevrol-bel-air",
            name: "Château Chevrol Bel Air",
            type: "Red",
            appellation: {
              "name": "Lalande-de-Pomerol",
              "region": "Bordeaux"
            },
            grapes: [
              "Cabernet Sauvignon, ",
              "Merlot, ",
              "Cabernet Franc."
            ]
        }

*/