//React y ReactDOM se necesitan importar en todos los componenetes que sean parte de
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from '../componentes/helloWorld';

const StartComponent = () =>{
    return <h1> New react app </h1>
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'));