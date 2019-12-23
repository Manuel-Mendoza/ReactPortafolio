import React, { Component } from 'react';

export class Contenido extends Component {
    render() {
        return (
        <div className="Contenido-details">
            <h3 className="Contenido-title">Platzi Video</h3>
            <h6 className="Contenido-course">React Native / React</h6>
            <p className="Contenido-date"><small><strong>Fecha:</strong> 01/07/2018</small></p>
            <p className="Contenido-url"><small><strong>Puedes verlo en:</strong> www.platzi.com/native</small></p>
            <p className="Contenido-description">Platzi Video fue el resultado de 3 meses de trabajo
                para crear la mejor app para enseñar el funcionamiento
                de React y React Native. Desde crear un vista-detalle, hasta patrones avanzados de nevegación, este proyecto ha sido el ejemplo de futuros creadores de aplicaciones multiplataforma</p>
        </div>
        );
    }
}

export default Contenido;
