mostrarImagen = function (idComponente, rutaImagen) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}
mostrarTexto = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

recuperarInt = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}

esMayuscula = function (caracter) {

    let codigoLetra = caracter;
    if (codigoLetra >= 65 && codigoLetra <= 90) {
        return true;
    } else {
        return false;
    }
}

esDigitoPass = function (caracter) {

    let codigoLetra = caracter;
    if (codigoLetra >= 48 && codigoLetra <= 57) {

        return true;
    } else {

        return false;
    }
}

esEspecialCaracter = function (caracter) {
    let codigoLetra = caracter;
    if (codigoLetra == 42 || codigoLetra == 45 || codigoLetra == 95) {
        return true;
    } else {
        return false;
    }
}

