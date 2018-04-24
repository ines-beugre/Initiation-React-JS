import React, {Component} from 'react';
import PropTypes from 'prop-types'; 



class Regions extends Component {

    onSelectRegion = (region) => {
      this.props.onSelectRegion(region);
    };
  
    render () {
      return (
       <div className="collection">
          <h2 className="center-align">Regions</h2>
          {
            this.props.regions.map(region =>
                <div key={region}>
                 <a href="#" className="collection-item" key={region} onClick={e => this.onSelectRegion(region)}>
                    {region}
                </a>
                </div>
            )
          }
        </div>  

      )
    }
  }
export default Regions;
/*
                <div key={region}> /*region est une chaine de caractère* /

marche
<div className="col s12 m6 l3">
            <h2 class="center-align">Regions</h2>
                <div className="collection">
                <a href="#!"class="collection-item">Bordeaux</a><br/>
                <a href="#!"class="collection-item active">Champagne</a>
                </div>
</div>
/////////////////////////////////////////
marche pas
               <div className="collection">
          {
            this.props.regions.map(region =>
              <a href="#" className="collection-item" key={region} onClick={e => this.onSelectRegion(region)}>
                {region}
              </a>
            )
          }
        </div>

*/