let mensajeError="";
validarPassword=function(cadena){
    if (cadena.length<8) {
        mensajeError+="La contraseña debe tener min 8 caracteres.\n"; 
    }
    if(cadena.length>16) {
        mensajeError+="La contraseña debe tener max 16 caracteres.\n"; 
    }
    if (contarMayusculas(cadena)==0) {
        mensajeError+= "Debe contener al menos una mayúscula.\n"; 
    }
    if (contarDigito(cadena)==0) {
         mensajeError += "Debe contener al menos un dígito.\n"
    }
    if (contarCaracterEspecial(cadena) == 0 ) {
       mensajeError += "Debe contener al menos un carácter especial: \n";
        
    }

     else {
        
         mensajeError="";
         
    }

    mostrarTexto("lblErrores",mensajeError);
    console.log(mensajeError);
    return mensajeError;
}

ejecutarValidacion= function() {
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    validarPassword(mensaje);
}

contarMayusculas=function(cadena){
    let letra;
    let contadorMayusculas=0;
    for(let i=0; i<cadena.length; i++){
        letra=cadena.charCodeAt(i);
        if (esMayuscula(letra)==true) {
            contadorMayusculas=contadorMayusculas+1;
        }
    }
    console.log("Mayusculas: "+contadorMayusculas);
    return contadorMayusculas;
}

contarDigito=function(cadena){
    let digito;
    let contadorDigitos=0; 
    for(let j=0;j<cadena.length;j++) {
        digito = cadena.charCodeAt(j); //Convierte el carácter a su correspondiente valor numérico.
        if (esDigitoPass(digito)==true) {  
           contadorDigitos++;
        }
    }
    console.log("Digitos: "+contadorDigitos);
    return  contadorDigitos;
}

contarCaracterEspecial=function(cadena) {
    let especial;
    let contadorEspecial=0;
    for (let i=0; i < cadena.length ; i ++ ){
        especial=cadena.charCodeAt(i);
        if (esEspecialCaracter(especial)==true) {
            contadorEspecial++;
        }
    }
    console.log("Especial: "+contadorEspecial);
    return contadorEspecial;
}