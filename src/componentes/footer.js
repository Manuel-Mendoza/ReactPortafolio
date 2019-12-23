import React, { Component } from 'react'
import '../App.css';
import platzi from './images/platzi.png';

export default class footer extends Component {
  render() {
    return (
      <div className="row">
          <div className="col-md-4 col-sm-12">
            Desarrolo Web con React.js
          </div>
          <div className="col-md-4 hidden-xs-down">
            <img className="platzi" src={platzi} alt="plazti"></img>
          </div>
          <div className="col-md-4">
              <p className="final">
            Manuel Mendoza Developer <strong>#FrontEnd</strong> 
              </p>
          </div>
      </div>
    )
}
}
