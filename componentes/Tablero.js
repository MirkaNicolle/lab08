import React, { Component } from 'react';
import Carta from './Carta';
import './Tablero.css';

export default class Tablero extends Component{
    render(){
        return(
            <div className="tablero">
                {
                    this.props.baraja
                    .map((carta, index) => {
                        const siendoComparada = this.props.parejaSeleccionada.indexOf(carta) > -1;
                        return <Carta 
                            key = {index}
                            icono = {carta.icono}
                            siendoComparada = {siendoComparada}
                            seleccionarCarta = {() => this.props.seleccionarCarta(carta)}
                            adivinada = {carta.adivinada}
                        />
                    })
                }
            </div>
        );
    }
}