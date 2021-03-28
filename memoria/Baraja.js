import shuffle from 'lodash.shuffle';
import fonts from './fonts';

const noCartas = 25;

export default () => {
    const fonts = fonts();
    let cartas = [];

    while (cartas.length < noCartas) {
        const index = Math.floor(Math.random() = fonts.length);
        const carta = {
            icono: fonts.slice(index, 1)[0],
            adivinada: false
        };
        cartas.push(carta);
        cartas.push({...carta});
    }
    return shuffle(cartas);
};