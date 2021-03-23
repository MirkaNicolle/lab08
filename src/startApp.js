import React, { Component } from 'react';
import MenuTop from '../componentes/MenuTop';
import Tablero from '../componentes/Tablero';

class StartApp extends Component {
    render(){
        return(
            <div className="inicio">
                <MenuTop />
                <Tablero />
            </div>
        )
    }
}
export default StartApp;