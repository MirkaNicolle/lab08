import React, { Component } from 'react';
import MenuTop from '../componentes/MenuTop';
import Tablero from '../componentes/Tablero';
import Baraja from '../memoria/Baraja';

const iniciar = () => {
    const baraja = Baraja();
    return {
        baraja
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
                />
            </div>
        )
    }
}
export default StartApp;