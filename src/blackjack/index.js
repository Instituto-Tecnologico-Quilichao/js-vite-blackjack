/* 
2C = Two of Clubs 
2D = Two oF Diaminds 
2H = Two of Hearts 
2S = Two of Spades 
 */
import _ from 'underscore'
import createDeck from './usecases/create-deck' //exportar por defecto permite utilizar cualquier nombre
// import { createDeck as createNewDeck } from './usecases/create-deck'
import pedirCarta from './usecases/pedir-carta'
import {valorCarta, dibujarCarta } from './usecases/valor-carta'
// import acumularPuntos from './usecases/acumular-puntos'

const app = (() => {
  'use strict'

  let deck = []
  const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K']

  let puntosJugadores = []
  
  //refrencias html
  const btnNuevo = document.querySelector('#btnNuevo'),
        btnPedir = document.querySelector('#btnPedir'),
        btnPlantar = document.querySelector('#btnPlantar'),
        puntosHTML = document.querySelectorAll('small'),
        divCartas = document.querySelectorAll('.divCartas')

  const main = ( numJugadores = 1) => {
    
    deck = createDeck( tipos, especiales)
    puntosJugadores = []
    for( let i = 0; i <= numJugadores; i++){
      puntosJugadores.push(0)
    }
  console.clear()
  }

  const acumularPuntos = ( carta, turno ) =>{
    puntosJugadores[turno] += valorCarta( carta )
    puntosHTML[turno].innerText = puntosJugadores[turno]
    return puntosJugadores[turno]
  }

  const pc = (puntosMinimos) => {
    do{
      const carta = pedirCarta( deck )
      acumularPuntos(carta, puntosJugadores.length - 1)
      
      divCartas[1].append(dibujarCarta(carta))

    } while( (puntosJugadores[1] < puntosMinimos) && (puntosMinimos <= 21) )

    setTimeout(() => {
      if (( puntosJugadores[1] > puntosMinimos) && (puntosJugadores[1] <=21)) {
        alert('GANO EL PC')
      }else if( puntosMinimos > 21) {
        alert('GANO EL PC')
      }else if( puntosJugadores[1] === puntosMinimos ) {
        alert('EMPATE')
      }else {
        alert('GANO EL JUGADOR')
      }
    }, 300);
  }

  //eventos
  btnPedir.addEventListener('click', () => {
    const carta = pedirCarta( deck )

    puntosJugadores[0] = acumularPuntos(carta, 0)
    
    divCartas[0].append(dibujarCarta(carta))

    if( puntosJugadores[0] > 21){
      btnPedir.disabled = true
      btnPlantar.disabled = true
      console.warn('PERDISTE')
      pc(puntosJugadores[0])
    }
  })

  btnPlantar.addEventListener('click', () => {
    btnPedir.disabled = true
    btnPlantar.disabled = true
    pc(puntosJugadores[0])
  })

  btnNuevo.addEventListener('click', () => {
    main()

    puntosHTML[0].innerText = 0
    puntosHTML[1].innerText = 0

    divCartas[0].innerHTML = ''
    divCartas[1].innerHTML = ''

    btnPedir.disabled = false
    btnPlantar.disabled = false
  })

  return {
    nuevoJuego: main
  }

})()
