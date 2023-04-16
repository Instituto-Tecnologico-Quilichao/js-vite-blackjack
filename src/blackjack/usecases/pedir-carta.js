/**
 * 
 * @param {Array<string>} deck 
 * @returns {Array<string>} retorna la carta de l deck
 */
const pedirCarta = ( deck ) =>{
  if( !deck || deck.length === 0){
    throw 'No hay cartas'
  }
  
  return deck.pop()
}

export default pedirCarta