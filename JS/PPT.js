let ataqueJugador   
let ataqueEnemigo

function iniciarJuego(){
    let botonPersonajeJugador = document.getElementById("boton-personaje")
    botonPersonajeJugador.addEventListener('click', seleccionarMascotaPersonaje)

    let botonPiedra = document.getElementById("piedra")
    botonPiedra.addEventListener("click", ataquePiedra)
    let botonPapel = document.getElementById("papel")
    botonPapel.addEventListener("click", ataquePapel)
    let botonTijera = document.getElementById("tijera")
    botonTijera.addEventListener("click", ataqueTijera)
    let botonLagarto = document.getElementById("lagarto")
    botonLagarto.addEventListener("click", ataqueLagarto)
    let botonSpock = document.getElementById("spock")
    botonSpock.addEventListener("click", ataqueSpock)
}

function seleccionarMascotaPersonaje(){
    let inputLeonard = document.getElementById("Leonard")
    let inputPenny = document.getElementById("Penny")
    let inputSheldon = document.getElementById("Sheldon")
    let spanPersonajeJugador = document.getElementById("personaje-jugador")

    if (inputLeonard.checked){
        spanPersonajeJugador.innerHTML = "Leonard"
    } else if (inputPenny.checked){
        spanPersonajeJugador.innerHTML = "Penny"
    } else if (inputSheldon.checked){
        spanPersonajeJugador.innerHTML = "Sheldon"
    } else {
        alert("Debes de seleccionar un personaje")
    }

    seleccionarPersonajeEnemigo()
}

function seleccionarPersonajeEnemigo() {
    let enemigoAleatorio = random(1,3)
    let spanPersonajeEnemigo = document.getElementById('personaje-enemigo')

    if (enemigoAleatorio == 1) {
        spanPersonajeEnemigo.innerHTML = 'Leonard'
    } else if (enemigoAleatorio == 2) {
        spanPersonajeEnemigo.innerHTML = 'Penny'
    } else {
        spanPersonajeEnemigo.innerHTML = 'Sheldon'
    }
}

function ataquePiedra(){
    ataqueJugador = 'Piedra'
    ataqueAleatorioEnemigo()
}

function ataquePapel(){
    ataqueJugador = 'Papel'
    ataqueAleatorioEnemigo()
}

function ataqueTijera(){
    ataqueJugador = 'Tijera'
    ataqueAleatorioEnemigo()
}

function ataqueLagarto(){
    ataqueJugador = 'Lagarto'
    ataqueAleatorioEnemigo()
}

function ataqueSpock(){
    ataqueJugador = 'Spock'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = random(1,5)
    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'Piedra'
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'Papel'
    } else if (ataqueAleatorio == 3){
        ataqueEnemigo = 'Tijera'
    }else if (ataqueAleatorio == 4){
        ataqueEnemigo = 'Lagarto'
    } else {
        ataqueEnemigo = 'Spock'
    }

    combate()
}

function combate (){
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje('Empate')
    } else if (ataqueEnemigo == 'Piedra' && ataqueJugador == 'Papel'){
        crearMensaje('Ganaste')
    } else if (ataqueEnemigo == 'Piedra' && ataqueJugador== 'Spock'){
        crearMensaje('Ganaste')
    } else if (ataqueEnemigo == 'Papel' && ataqueJugador == 'Tijera' ){
        crearMensaje('Ganaste')
    } else if (ataqueEnemigo == 'Papel' && ataqueJugador == 'Lagarto'){
        crearMensaje('Ganaste')
    } else if (ataqueEnemigo == 'Tijera' && ataqueJugador == 'Piedra'){
        crearMensaje('Ganaste')
    } else if (ataqueEnemigo == 'Tijera' && ataqueJugador == 'Spock'){
        crearMensaje('Ganaste')
    }else if (ataqueEnemigo == 'Lagarto' && ataqueJugador == 'Piedra'){
        crearMensaje('Ganaste')
    }else if (ataqueEnemigo == 'Lagarto' && ataqueJugador == 'Tijera'){
        crearMensaje('Ganaste')
    }else if (ataqueEnemigo == 'Spock' && ataqueJugador== 'Papel'){
        crearMensaje('Ganaste')
    }else if (ataqueEnemigo == 'Spock' && ataqueJugador== 'Lagarto'){
        crearMensaje('Ganaste')
    } else{
        crearMensaje('Perdiste')
    }

}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Atacaste con ' + ataqueJugador + ' el rival ataco con ' + ataqueEnemigo + ' ' + resultado

    sectionMensajes.appendChild(parrafo)
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)