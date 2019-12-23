import React, { Component } from 'react'
import './Contactanos.css'
import email from './images/envelope.svg';

export default class Contactanos extends Component {
  render() {
    return (
      <div className="llamame">
        <h5>¿Creamos algo Juntos?</h5>
        <p className="cont_email">
          <img className="email" src={email} alt="@mail"></img>
          <input className="input" type="text" placeholder="Deja tu @mail"></input>
        </p>
        <button type="button" className="btn btn-lg btn-primary">Enviar</button>
      </div>
    )
  }
}
