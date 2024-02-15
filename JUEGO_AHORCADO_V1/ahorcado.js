//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
let letrasEncontradas = 0;
let intentos = 0;
let errores = 0;
esMayuscula = function (caracter) {
    let codigoLetra;
    for (let i = 0; i < caracter.length; i++) {
        codigoLetra = caracter.charCodeAt(i);
        if (codigoLetra >= 65 && codigoLetra <= 90) {
            return true;
        } else {
            return false;
        }
    }
    console.log("Mayusculas: " + codigoLetra);
}

guardarPalabra = function () {
    let palabra = recuperarTexto("txtSecreta");
    if (!(palabra.length == 5) && !(esMayuscula(palabra) == false)) {
        alert("La contrasenia debe tener 5 letras mayusculas");

    } else {
        palabraSecreta = palabra;
        console.log("Guardada: " + palabraSecreta);
        alert("Palabra Guardada");
    }
}

mostrarLetra = function (letra, posicion) {

    if (posicion == 0) {

        mostrarTexto("div0", letra);
    }
    if (posicion == 1) {

        mostrarTexto("div1", letra);
    }
    if (posicion == 2) {

        mostrarTexto("div2", letra);
    }
    if (posicion == 3) {

        mostrarTexto("div3", letra);
    }
    if (posicion == 4) {

        mostrarTexto("div4", letra);
    }

}

validar = function (letra) {
    let encontrado=false;

    for (let posicion = 0; posicion < palabraSecreta.length; posicion++) {

        let caracterSecreto = palabraSecreta.charAt(posicion);
        let caracterLetra = letra;
        if (caracterSecreto == caracterLetra) {
            mostrarLetra(caracterLetra, posicion);
            letrasEncontradas++;
            encontrado=true;

            //console.log("El CARACTER " + caracterLetra+ " posicion " + posicion);
        }

    }
  


    if (!encontrado) {
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
        mostrarAhorcado();
    }




}

ingresarLetra = function () {
    let letra = recuperarTexto("txtLetra");
    if (esMayuscula(letra) == true && letra.length == 1) {
        validar(letra);
        intentos++;
    } else {
        alert("SOLO SE ACEPTA UNA LETRA MAYUSCULA");
    }

    if (letrasEncontradas == 5) {
        mostrarImagen("ahorcadoImagen", "ganador.gif");
    }
    if (intentos == 10) {
        mostrarImagen("ahorcadoImagen", "gameOver.gif");
    }


}

mostrarAhorcado = function () {
    if (errores == 1) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_01.png");
    }
    if (errores == 2) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_02.png");
    }
    if (errores == 3) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_03.png");
    }
    if (errores == 4) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_04.png");
    }
    if (errores == 5) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_05.png");
    }
    if (errores == 6) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_06.png");
    }
    if (errores == 7) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_07.png");
    }
    if (errores == 8) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_08.png");
    }
    if (errores == 9) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_09.png");
    }

}