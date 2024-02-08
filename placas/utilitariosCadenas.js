esMayuscula=function(caracter,idComponenteError){
    let hayErrores = false;
    let codigoLetra=caracter;
    let mensaje;
    if (!(codigoLetra >= 65 && codigoLetra <= 90)) {
        mensaje="No es mayuscula";
        mostrarTexto(idComponenteError, mensaje);
        hayErrores= true;
    } 
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
    }
    return !hayErrores;
}

esDigito=function(caracter,idComponenteError){
    let hayErrores = false;
    let codigoLetra=caracter;

    if (!(codigoLetra >= 48 && codigoLetra <= 57)) {

        mostrarTexto(idComponenteError, "No es dígito");
        hayErrores= true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
    }
    return !hayErrores;
} 

esGuion=function(caracter,idComponenteError){
    let hayErrores = false;
    let codigoLetra=caracter;
    if (!(codigoLetra == 45)) {
        mostrarTexto(idComponenteError, "No hay guión");
        hayErrores= true;
    } 
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
    }
    return !hayErrores;
} 