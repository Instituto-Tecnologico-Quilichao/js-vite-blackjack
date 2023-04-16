import _ from 'underscore'

// export const ejemplo = 'fdo' //exportar de modo independiente

/**
 * 
 * @param {Array<string>} tiposCarta 
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array<string>}
 */
const createDeck = (tiposCarta, tiposEspeciales) => {

  //agregar validaciones de los parametros de la función
  
  let deck = []
  for( let i = 2; i <= 10; i++) {
    for( let tipo of tiposCarta ) {
      deck.push(i + tipo)
    }
  }
  for( let tipo of tiposCarta ){
    for( let especial of tiposEspeciales ){
      deck.push(especial + tipo)
    }
  }

  return _.shuffle(deck)
}

export default createDeck