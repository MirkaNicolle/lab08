import React, { Component } from 'react';
import './MenuTop.css';

export default class MenuTop extends Component{
    render(){
        return (
            <header>
                <div className="titulo">Memoria con React</div>
                <div>
                    <button className="reiniciarBoton">Reiniciar partida</button>
                </div>
                <div className="subtitulo">Intentos: </div>
            </header>
        );
    }
};

//Solo son los textos, no hay funcionalidad