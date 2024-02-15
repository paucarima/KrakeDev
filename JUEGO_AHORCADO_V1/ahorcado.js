//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
let letrasEncontradas;

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
     
    for (let posicion = 0; posicion < palabraSecreta.length - 1; posicion++) {
        
        let caracterSecreto = palabraSecreta.charAt(posicion);
        let caracterLetra=letra.charAt(posicion);
        if (caracterSecreto==caracterLetra) {
            mostrarLetra(caracterLetra,posicion);
            letrasEncontradas++;
            //console.log("El CARACTER " + caracterLetra+ " posicion " + posicion);
        }  

    }
}
