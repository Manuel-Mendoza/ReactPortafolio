import React, { Component } from 'react'
import Conf_img from './images/platzi-conf.jpg';
import './Experiencias.css';

export default class Experiencias extends Component {
  render() {
    return (
      <div>
        <img className="Conf_img" src={Conf_img} alt="Conf"></img>
        <h3>PlatziConf</h3>
          <p>El Evento mas grande sobre gente
              que quiere aprender mas sobre internet.
              En este evento te comparto como tener
              una vida en costante aprendizaje.
          </p>
          <a href="https://www.youtube.com/watch?v=YD0slY1P-uE" target="_blanck">
            <button className="btn btn-primary">Ir al enlace</button>
          </a>
      </div>
    )
  }
}
