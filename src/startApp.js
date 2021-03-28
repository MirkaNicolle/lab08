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
            this.state.comparado ||
            this.state.parejaSeleccionada.indexOf(carta) > -1 ||
            carta.adivinada
        ){
            return;
        }
        const parejaSeleccionada = [...this.state.parejaSeleccionada, carta];
        this.setState({
            parejaSeleccionada
        })
    }
    
}
export default StartApp;