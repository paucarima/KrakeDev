saludar = function(){ 
    //recuperar el valor de la caja  de txtnombre
    let nombre = recuperarTexto("txtNombre");
      //recuperar el valor de la caja  de txtApellido
    let apellido = recuperarTexto("txtApellido");
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

