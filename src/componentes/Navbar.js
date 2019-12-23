import React, { Component } from 'react';
import logo from './images/logo.png';
import './Navbar.css';


export class Navbar extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <a href="https://www.facebook.com/JhemaCm"
                        target="_blank"
                        rel="noopener noreferrer">
                            <img className="logo" src={logo} alt="logo"></img>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-6 enlase">
                        <a href="#portafolio">Portafolio</a>
                    </div>    
                    <div className="col-lg-2 col-md-6 enlase" >
                        <a href="#experiencias">Experiencias</a>
                    </div>    
                    <div className="col-lg-2 col-md-6 enlase Navbar__border">
                        <a href="#contacto">Contactenos</a>
                    </div>    
                </div>

            </div>
        );
    }
}

export default Navbar;
