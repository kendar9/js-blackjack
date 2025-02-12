import _ from "underscore";
/**
 * Esta función crea un nuevo deck
 * @param {array<String>} tiposDeCarta
 * @param {array<String>} tiposEspeciales
 * @returns {array<String>} regresa un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if(!tiposDeCarta || tiposDeCarta.length===0) 
        throw new error("tiposDeCarta es obligatorio como un arreglo de string");
    if(!tiposEspeciales || tiposEspeciales.length===0) 
        throw new error("tiposDeCarta es obligatorio como un arreglo de string");
    let deck=[];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}