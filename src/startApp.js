import React, { Component } from 'react';
import MenuTop from '../componentes/MenuTop';
import Tablero from '../componentes/Tablero';
import Baraja from '../componentes/Baraja';

const iniciar = () => {
    const baraja = Baraja();
    return {
        baraja,
        parejaSeleccionada: [],
        comparado: false,
        numeroIntentos: 0
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
                <MenuTop 
                    numeroIntentos = {this.state.numeroIntentos}
                    reset = {() => this.resetearPartida()}
                />
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
                baraja = baraja.map ((carta) => {
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
                comparada: false,
                numeroIntentos: this.state.numeroIntentos + 1
            })
        }, 1000)
    }

    ganador(baraja){
        if (
            baraja.filter((carta) => !carta.adivinada).length === 0
        ){
            alert (`Ganaste en ${this.state.numeroIntentos} intentos!`)
        }
    }

    resetearPartida() {
        this.setState(
            iniciar()
        );
    }
}
export default StartApp;