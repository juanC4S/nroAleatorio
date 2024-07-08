let nrosecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let nroMaximo = 10;

console.log(nrosecreto);
function asignarTextoElemento(Elemento, texto){
    let elementoHTML = document.querySelector(Elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function verificarIntento(){

    let nroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);

    console.log(nroDeUsuario === nrosecreto);
    if(nroDeUsuario == nrosecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos===1?"vez":"veces"}` );
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto
        if(nroDeUsuario > nrosecreto){
            asignarTextoElemento('p', 'El nro secreto es menor');
        }else{
            asignarTextoElemento('p', 'El nro secreto es mayor');
        }

        intentos++;

        limpiarCaja();
        
    }
    return;
};
function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
    return;
}

function generarNroAleatorio(){
    let nroGenerado= Math.floor(Math.random()*nroMaximo)+1;

    console.log(nroGenerado);
    console.log(listaNumerosSorteados);
    

    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == nroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los números posibles');
    }else{
         // si el nro generado esta incluido en la lista?
        if(listaNumerosSorteados.includes(nroGenerado)){
            return generarNroAleatorio();
        }else{
            listaNumerosSorteados.push(nroGenerado);
            return nroGenerado;
        }
    }

   
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${nroMaximo}`);
    nrosecreto = generarNroAleatorio();
    intentos = 1;
    return;
}


function reiniciarJuego(){
    //limpiarcaja
    limpiarCaja();
    //indicar mensahe de intervalo de nros
    condicionesIniciales();
    
    //deshabilitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();
