import React, { Component } from 'react';
import './Card.css';

class App extends Component {
  render() {
    return (

      <div className="card">
        <img className="card-img-top" src="https://www.elizabethskitchendiary.co.uk/wp-content/uploads/2017/07/Percy-on-the-Beach-Cocktail-4.jpg" alt="Cocktail"></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>

    );
  }
}

export default App;
