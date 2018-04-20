import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import Regions from './Regions';
import { WineList } from './WineList';
import Wine from './Wine';
import LikeButton from './LikeButton';
import * as WinesService from './services/Methods';


/*smart component*/
class WineApp extends Component{
    state = {
        regions: ["Bordeaux ", "Bourgogne"],
        selectedRegion: null, 
        wines: [],
        selectedWine: null,
        
    };

    componentDidMount(){
            WinesService.fetchRegions()
            .then(regions => {
                /*affiche la iste des régions dans la consoles */
                console.log(regions);
                this.setState({regions: regions});  
            });  
    }
    
    onSelectedRegion = (region) => {
        WinesService.fecthWinesFrom(region)
            .then(wines => {
                /*affiche la liste des vins, pour la région sélectionnée dans la console*/
                console.log(wines);
                /*en ecriture*/
                this.setState({selectRegion: region, wines: wines});
             });
    }

    onSelectWine = (id) => {
        WinesService.fetchWine(id)
            .then(wine =>{
                console.log(wine);
                this.setState({selectedWine: wine});
        });
    }

    render(){
        console.log(this.state.selectedWine);
        return(
    <div className="container">
        <h1 className="center-align">Open Wine Database</h1>
        <div className="row">
        <Regions 
            regions={this.state.regions} //regions recupère les états de regions
            region={this.state.selectedRegion} //regions recupère les états de la région selectionnée
            onSelectRegion={this.onSelectedRegion}/>
        <WineList 
            wines={this.state.wines}
            wine={this.state.selectedWine}
            onSelectWine={this.onSelectWine}/>
        <Wine 
            wine={this.state.selectedWine}/>
        <LikeButton />
        </div>
    </div>
        )
    }
}

export default WineApp;

/*
 <Regions regions={["Bordeaux", "Bourgogne"]}/>
*/










