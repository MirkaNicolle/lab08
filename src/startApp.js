import React, { Component } from 'react';
import Carta from '../componentes/Carta';
import MenuTop from '../componentes/MenuTop';
import Tablero from '../componentes/Tablero';
import Baraja from '../memoria/Baraja';

const iniciar = () => {
    const baraja = Baraja();
    return {
        baraja,
        parejaSeleccionada: [],
        comparado: false
    };
}

class StartApp extends Component {
    constructor(props) {
        super(props);
        this.state = iniciar();
    }

    render(){
        return(
            <div className="inicio">
                <MenuTop />
                <Tablero 
                    baraja = {this.state.baraja}
                    parejaSeleccionada = {this.state.parejaSeleccionada}
                    seleccionarCarta = {(carta) => this.seleccionarCarta(carta)}
                />
            </div>
        )
    }

    seleccionarCarta(carta) {
        if (
            this.state.comparada ||
            this.state.parejaSeleccionada.indexOf(carta) > -1 ||
            carta.adivinada
        ){
            return;
        }
        const parejaSeleccionada = [...this.state.parejaSeleccionada, carta];
        this.setState({
            parejaSeleccionada
        });

        if (parejaSeleccionada.length === 2) {
            this.compararPareja(parejaSeleccionada);
        }
    }
    
    compararPareja(parejaSeleccionada) {
        this.setState({comparada: true});

        setTimeout(() => {
            const [primeraCarta, segundaCarta] = parejaSeleccionada;
            let baraja = this.state.baraja;

            if (primeraCarta.icono === segundaCarta.icono) {
                baraja = baraja.map (() => {
                    if (carta.icono !== primeraCarta.icono){
                        return carta;
                    }
                    return {...carta, adivinada: true};
                });
            }
            this.ganador(baraja);

            this.setState({
                parejaSeleccionada: [],
                baraja,
                comparada: false
            })
        }, 1000)
    }

    ganador(baraja){
        if (
            baraja.filter((carta) => !carta.adivinada).length === 0
        ){
            alert ('Ganaste ')
        }
    }
}
export default StartApp;