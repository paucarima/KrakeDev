ejecutarPrueda1 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

recorrerCadena = function (cadena) {
    //0123
    //Juanito


    for (let posicion = 0; posicion < cadena.length; posicion++) {
        let caracter = cadena.charAt(posicion);
        console.log("El caracter " + caracter + " en la posicion " + posicion);

    }

    for (let posicion = 0; posicion < cadena.length - 1; posicion++) {
        let caracter = cadena.charAt(posicion);
        console.log("El CARACTER " + caracter + " posicion " + posicion);

    }
}

ejecutarPrueba2 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    invertirCadena(mensaje);
}

invertirCadena = function (cadena) {
    let resultado = "";
    let letra;

    for (let posicion = cadena.length; posicion >= 0; posicion--) {
        letra = cadena.charAt(posicion);
        resultado = resultado + letra;
    }
    mostrarTexto("lblResultado", resultado);
    // console.log(resultado);
}

buscarLetra = function (cadena, letra) {
    let letraIterada;
    let existeLetra = false;
    for (let i = 0; i < cadena.length; i++) {
        letraIterada = cadena.charAt(i);
        if (letraIterada == letra) {
            existeLetra = true;
        }
    }
    if (existeLetra==true) {
        console.log("existe");
        return true;
    }else{
        console.log(" no existe");
        return false;
    }
}

contarMayusculas=function(cadena){
    let letra;
    let contadorMayusculas=0;
    for(let i=0; i<cadena.length; i++){
        letra=cadena.charAt(i);
        if (esMayuscula(letra)) {
            contadorMayusculas=contadorMayusculas+1;
        }
    }
    console.log(contadorMayusculas);
}