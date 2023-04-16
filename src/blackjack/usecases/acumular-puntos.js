/**
 * 
 * @param {String} carta 
 * @param {Number} turno, juagdor identificado por posicion del array
 * @returns 
 */
const acumularPuntos = ( carta, turno ) =>{
  puntosJugadores[turno] += valorCarta( carta )
  puntosHTML[turno].innerText = puntosJugadores[turno]
  return puntosJugadores[turno]
}

export default acumularPuntos