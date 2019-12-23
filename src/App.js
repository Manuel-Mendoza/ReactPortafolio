import React, { Component } from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import hero from'./componentes/images/hero.jpg';
import Contenido from './componentes/Contenido';
import Img__Cont from './componentes/images/platzi-video-react-native.png';
import Experiencias from './componentes/Experiencias';
import Programar from './componentes/images/imagen-final.png';
import Contactanos from './componentes/Contactanos';
import Twitter from './componentes/images/twitter.svg';
import facebook from './componentes/images/facebook.svg';
import GitHub from './componentes/images/github.svg';
import Instagram from './componentes/images/instagram.svg';
import Footer from './componentes/footer';



export class App extends Component {
    render() {
        return (<div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <Navbar/> 
                    </div>
                </div>
                <div className="row padd">
                    <div className="col-md-6 col-sm-12">
                        <p className="titulo">Hola! Soy <strong>Manuel Mendoza</strong><br/>
                        Desarrollador con <strong>React.Js</strong><br/>
                        y me encanta el <strong>#Frontend</strong>
                        </p>
                    </div>
                    <div className="col-6 hidden-xs-down">
                        <img className="hero" src={hero} alt="Img_principal"></img>
                    </div>

                </div>
                <div className="row">
                    <div className="col-12" id="portafolio">
                        <h1>Portafolio (Proyectos)</h1>
                    </div>
                </div>
                <div className="row contenido">
                    <div className="col-6">
                        <Contenido/>
                    </div>
                    <div className="col-6">
                        <img className="img-cont" src={Img__Cont} alt="Img__Cont"></img>
                    </div>
                    <div className="col-6">
                        <Contenido/>
                    </div>
                    <div className="col-6">
                    <img className="img-cont" src={Img__Cont} alt="Img__Cont"></img>
                        
                    </div>
                    <div className="col-6">
                        <Contenido/>
                    </div>
                    <div className="col-6">
                    <img className="img-cont" src={Img__Cont} alt="Img__Cont"></img>
                    </div>
                </div>
                <div className="row">
                <div className="col-12" id="experiencias">
                        <h1>Mis Experiencias</h1>
                    </div>
                </div>

                <div className="row expp">
                    <div className="col-sm-6 div_exp">
                        <Experiencias/>
                    </div>
                    <div className="col-sm-6 div_exp">
                        <Experiencias/>
                        
                    </div>
                    <div className="col-sm-6 div_exp">
                        <Experiencias/>
                        
                    </div>
                    <div className="col-sm-6 div_exp">
                        <Experiencias/>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <img className="programar" src={Programar} alt="Programar"></img>
                    </div>
                </div>
                    <div className="row llamame" id="contacto">
                        <div className="col-6">
                        <Contactanos/>
                        </div>
                        <div className="col-6 redSocial">
                            <a className="twitter" href="https://twitter.com/login?lang=es" target="_blanc">
                            <img  className="col-3" src={Twitter} alt="Twitter"></img>
                            </a>
                            <a className="facebook" href="https://facebook.com/JhemaCm" target="_blanc">
                            <img className="col-3" src={facebook} alt="Facebook"></img>
                            </a>
                            <a className="github" href="https://github.com/Manuel-Mendoza" target="_blanc">
                            <img className="col-3" src={GitHub}alt="GitHub"></img>
                            </a>
                            <a className="instagram" href="https://www.instagram.com/jhema_mendoza/" target="_blanc">
                            <img className="col-3" src={Instagram}alt="Instagram"></img>
                            </a>
                        </div>
                    </div>
            </div>
            <div className="col footer">
                <Footer/>
            </div>
        </div>
        );
    }
}

export default App;
