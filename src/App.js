import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

import WineApp from './WineApp';
import Wine from './Wine';
import Regions from './Regions';
import WineList from './WineList';
import LikeButton from './LikeButton';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <WineApp/>
        
      </div>
    );
  }
}

export default App;
/*
        <WineApp/>
        <Regions/> 
        <WineList/>    
        <Wine/>
        <LikeButton/>

*/