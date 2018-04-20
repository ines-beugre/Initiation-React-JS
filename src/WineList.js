import React, { Component } from 'react';
import propTypes from 'prop-types';

export class WineList extends Component {
   static propTypes = {
       onSelectWine: propTypes.func,
       wines: propTypes.array,
       wine: propTypes.object
   }

   onSelectWine = (wine) => {
       this.props.onSelectWine(wine);
   };
      
/** methode qui permet de savoir qu'on a reçu la liste des vins, MAJ des props d'une composant*/
   componentWillReceiveProps(newProps) {
       console.log(newProps.wines);
   }

    render(){
        return(
            <div className="col s12 m6 l3">
            <h2 className="center-align">Wines list</h2>
                <div className="collection">
                {
                    /*lire les attributs de la variable WInes*/
                    this.props.wines.map(wines =>
                        <div key={wines.id}>
                            <a href="#" className="collection-item" key={wines.id} onClick = {e => this.onSelectWine(wines.id)}>
                                {wines.name}
                            </a>
                        </div>
                    )
                }
                </div>
            </div>


        )
    }
}

export default WineList;

/* Liste des vins codé en dure
            <div className="col s12 m6 l3">
            <h2 className="center-align">Wines List</h2>
                <div className="collection">
                <a href="#!" className="collection-item">Wine 1</a><br/>
                <a href="#!" className="collection-item active">Wine 2</a><br/>
                <a href="#!" className="collection-item">Wine 3</a><br/>
                </div>
            </div>

 <div key={wines.id}> /*wine est un objet, so, on recupère son id



*/