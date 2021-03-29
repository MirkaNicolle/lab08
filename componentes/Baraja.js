import shuffle from 'lodash.shuffle';
import { array } from 'prop-types';

const noCartas = 20;

export default () => {
    const imagenes = new array("img/a.png", "img/b.png", "img/c.png", "img/d.png", "img/e.png", "img/f.png", "img/g.png", "img/h.png", "img/i.png", "img/j.png");
    let cartas = [];

    while (cartas.length < noCartas) {
        const index = Math.floor(Math.random() * imagenes.length);
        const carta = {
            icono: imagenes.slice(index, 1)[0],
            adivinada: false
        };
        cartas.push(carta);
        cartas.push({...carta});
    }
    return shuffle(cartas);
};