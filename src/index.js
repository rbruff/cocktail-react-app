import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div className= "container">
    <div className= "row">
    <h1>Cocktail Library</h1>
    </div>
    <div className="row">
    <Card />
    <Card />
    <Card />
    </div>
    <div className="row">
    <Card />
    <Card />
    <Card />
    </div>
  </div>

  , document.getElementById('root'));
registerServiceWorker();
