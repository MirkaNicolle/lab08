import React, { Component } from 'react';
import Carta from './Carta';
import './Tablero.css';

export default class Tablero extends Component{
    render(){
        const cartas = [1,2,3,4,5];
        return(
            <div className="tablero">
                <ul>
                    {cartas.map((carta) => (
                    <li key={carta}></li>
                    ))}
                </ul>
            </div>
        );
    }
}