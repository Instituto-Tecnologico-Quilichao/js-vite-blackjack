/**
 * 
 * @param {String} carta 
 * @returns {String} Valor de la carta
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1)

  return ( isNaN( valor ) ) ? 
          ( valor === 'A' ) ? 11 : 10
          : valor * 1
}

/**
 * 
 * @param {String} carta 
 * @returns 
 */
export const dibujarCarta = (carta) =>{
  const imgCarta = document.createElement('img')
  imgCarta.src = `assets/cartas/${carta}.png`
  imgCarta.classList.add('carta')

  return imgCarta
}

