alert("hola hola BIENVENID@ ")

const sectionSeleccionarAtaque =document.getElementById('Seleccionar-ataque')
const reiniciar =document.getElementById('reiniciar')
const botonMascota = document.getElementById('boton-mascota') // funcion que llama al boton 
const botonfuego = document.getElementById('fuego')
const botonAgua = document.getElementById('agua')
const botontierra = document.getElementById('tierra')
const botonReinicio = document.getElementById('reiniciar')

const sectionSeleccionarMascota =document.getElementById('Seleccionar-mascota')

const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo =document.getElementById('mascota-enemigo')
const spanVidas = document.getElementById('vida-jugador')
const spanVidasEnemigo = document.getElementById('vida-enemigo')

const sectionMensaje = document.getElementById('resultado')

const ataqueDeljugador = document.getElementById('ataque-del-jugador')
const ataqueDelenemigo = document.getElementById('ataque-del-enemigo')

const contenedorTarjetas = document.getElementById('contenedorTarjetas')

let arregloMokepones =[]
let ataqueJugador
let ataqueEnemigo1 

let opcionDeMokepones
let inputHipodogue  
let inputCapipepo 
let inputRatiguella

let mascotajugador
let vidasJugador = 3 
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre,imagen,vida,){
        this.nombre = nombre
        this.imagen = imagen
        this.vida = vida
        this.ataques =[]
    }  
}

let hipodogue = new Mokepon('hipodogue','./imagenes/mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new Mokepon('capipepo','./imagenes/mokepons_mokepon_capipepo_attack.png', 5)
let ratiguella = new Mokepon('ratiguella','./imagenes/mokepon_ratigueya.webp',5)

hipodogue.ataques.push(
    {nombre: 'Agua', id: 'agua' },
    {nombre: 'Agua', id: 'agua' },
    {nombre: 'Agua', id: 'agua' },

    {nombre: 'Tierra', id: 'tierra' },
    {nombre: 'Fuego', id: 'fuego' },
    
)

capipepo.ataques.push(
    {nombre: 'Tierra', id: 'tierra' },
    {nombre: 'Tierra', id: 'tierra' },
    {nombre: 'Tierra', id: 'tierra' },

    {nombre: 'Agua', id: 'agua' },
    {nombre: 'Fuego', id: 'fuego' },
    
)

ratiguella.ataques.push(
    {nombre: 'Fuego', id: 'fuego' },
    {nombre: 'Fuego', id: 'fuego' },
    {nombre: 'Fuego', id: 'fuego' },

    {nombre: 'Agua', id: 'agua' },
    {nombre: 'Tierra', id: 'tierra' },
   
)

arregloMokepones.push(hipodogue,capipepo,ratiguella)


function iniciarjuego(){
    sectionSeleccionarAtaque.style.display ='none'
    reiniciar.style.display ='none'
    botonMascota.addEventListener('click', selecionarmascota) //ejecuncion con click con el metodo 
    botonfuego.addEventListener('click',ataqueFuego)
    botonAgua.addEventListener('click',ataqueAgua)
    botontierra.addEventListener('click',ataqueTierra) 
    botonReinicio.addEventListener('click',reinicio)

    arregloMokepones.forEach((Mokepon)=>{
      opcionDeMokepones = `
        <input type="radio" name="Mascota" id=${Mokepon.nombre}>
        <label for=${Mokepon.nombre} class="tarjetaMo">
            <p>${Mokepon.nombre}</p>
            <img src=${Mokepon.imagen} alt=${Mokepon.nombre}>
        </label>` 
        contenedorTarjetas.innerHTML += opcionDeMokepones
        inputHipodogue = document.getElementById('hipodogue') 
        inputCapipepo = document.getElementById('capipepo')
        inputRatiguella= document.getElementById('ratiguella')
    })
}
 
function selecionarmascota(){ //funcion que nos envia un mensaje de que se selecciono la mascota 
    //si selecciona capipepo que me mande el mensaje seleccionaste capipepo

   
    sectionSeleccionarMascota.style.display ='none'
    sectionSeleccionarAtaque.style.display ='flex'
    reiniciar.style.display ='none'

    if(inputHipodogue.checked){
     spanMascotaJugador.innerHTML = inputHipodogue.id
     mascotajugador =inputHipodogue.id
    }else if (inputCapipepo.checked){
     spanMascotaJugador.innerHTML = inputCapipepo.id
     mascotajugador =inputCapipepo.id
    }else if (inputRatiguella.checked){
     spanMascotaJugador.innerHTML = inputRatiguella.id
     mascotajugador =inputRatiguella.id
    }else{
        alert('no has seleccionado ninguna opcion')
    }

    extraerAtaques(mascotajugador)

    MascotaEnemigo()
}

function extraerAtaques(mascotajugador){
   let ataques 
   for (let i = 0; i < arregloMokepones.length; i++) {
    if (mascotajugador == arregloMokepones[i.nombre])  {
        ataques = arregloMokepones[i].ataques
    }
   }
   console.log(ataques)
}

function MascotaEnemigo(){
   let ataqueAleatorio = aleatorio(0,arregloMokepones.length -1)

   spanMascotaEnemigo.innerHTML= arregloMokepones[ataqueAleatorio].nombre
}
function aleatorio(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}
function ataqueFuego (){
 ataqueJugador ='FUEGO'
 ataqueEnemigo() //llamar directamente la funcion despues de que ocurra el evento anterior 
}
function ataqueAgua (){
 ataqueJugador = 'AGUA'
 ataqueEnemigo()

}
function ataqueTierra (){
 ataqueJugador = 'TIERRA'
 ataqueEnemigo()
}

function ataqueEnemigo(){

 let ataqueEnemigo2=aleatorio(1,3)

 if (ataqueEnemigo2==1)
 ataqueEnemigo1='FUEGO'
 else if (ataqueEnemigo2==2)
 ataqueEnemigo1='AGUA'
 else
 ataqueEnemigo1='TIERRA'

 combate()
}
function combate (){
  
    if (ataqueEnemigo1 == ataqueJugador){
        crearMensaje("EMPATE TECNICO")  
    }
    else if (ataqueJugador == 'FUEGO' && ataqueEnemigo1 == 'TIERRA'){
        crearMensaje("GANASTE") 
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else if (ataqueJugador =='AGUA' && ataqueEnemigo1=='FUEGO'){
        crearMensaje("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else if (ataqueJugador == 'TIERRA' && ataqueEnemigo1=='AGUA'){
        crearMensaje("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else{
        crearMensaje("  PERDISTE :( ")
        vidasJugador --
        spanVidas.innerHTML = vidasJugador
    }
    
   revisarVidas()
   

}
function revisarVidas(){

    if (vidasEnemigo==0){
     MensajeFinal("FELICITACIONES HAS GANADO !!!🤺 ")
    }
    else if (vidasJugador==0){
     MensajeFinal("PERDISTE 😖")
    }

}

function MensajeFinal (resultadoFinal){
    

    let parrafo =document.createElement('p')
    sectionMensaje.innerHTML = resultadoFinal

    botonfuego.disabled = true
    botonAgua.disabled = true
    botontierra.disabled = true
    reiniciar.style.display ='block'

}


function crearMensaje (resultado){
   
    let nuevoataquejugador =document.createElement('p')
    let nuevoataqueenemigo =document.createElement('p')

    sectionMensaje.innerHTML =resultado
    nuevoataquejugador.innerHTML = ataqueJugador
    nuevoataqueenemigo.innerHTML = ataqueEnemigo1

    //let parrafo =document.createElement('p')
    //parrafo.innerHTML = 'Tu mascota ataco con' + ataqueJugador +' la mascota del enemigo ataco con '+ ataqueEnemigo1 +' , '+ resultado


    ataqueDeljugador.appendChild(nuevoataquejugador)
    ataqueDelenemigo.appendChild(nuevoataqueenemigo)
}

function reinicio (){
  location.reload()
}

window.addEventListener('load', iniciarjuego) //escuche los eventos de load->cargue de todo el html