obtenerAleatorio = function () {
    //Crear una funcion llamada lanzar Dado
    //no recibe parametros
    //retorna un numero aleatorio entre 1 y 3
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio = Math.random();//entre 0  u  1
    numeroMultiplicado = aleatorio * 3;
    //console.log(numeroMultiplicado);
    numeroEntero = parseInt(numeroMultiplicado);//entre 0 y 2
    //console.log("------>", numeroEntero);
    valorDado = numeroEntero + 1;//entre 0 y 3
    //console.log("----------->", valorDado);
    return valorDado;
}

generarElemento = function () {
    let numero = obtenerAleatorio();
    let elemento;
    if (numero == 1) {
        elemento = "piedra";
    }
    if (numero == 2) {
        elemento = "papel";
    }
    if (numero == 3) {
        elemento = "tijera";
    }
    return elemento;
}

determinarGanador = function (eleccionJugador1, eleccionJugador2) {
    let resultado;
    let numero;
    if (eleccionJugador1 == eleccionJugador2) {
        numero = 0;
    } else if ((eleccionJugador1 == "piedra" && eleccionJugador2 == "tijera") ||
        (eleccionJugador1 == "tijera" && eleccionJugador2 == "papel") ||
        (eleccionJugador1 == "papel" && eleccionJugador2 == "piedra")) {
        numero = 1;
    }else{
        numero = 2;
    }
    
    return numero;
}

generarRuta = function (nombre) {
    if (nombre == "piedra") {
        mostrarImagen("imgJuego", "./imagenes/piedra.gif");
    } else if (nombre == "papel") {
        mostrarImagen("imgJuego", "./imagenes/papel.gif");
    } else if (nombre == "tijera") {
        mostrarImagen("imgJuego", "./imagenes/tijera.gif");
    }
    return  nombre;
}

