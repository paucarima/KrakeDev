saludar = function(){ 
    //recuperar el valor de la caja  de txtnombre
    let nombre = recuperarTexto("txtNombre");
      //recuperar el valor de la caja  de txtApellido
    let apellido = recuperarTexto("txtApellido");

    let edad=recuperarInt("txtEdad");

    let estatura=recuperarFloat("txtEstatura");
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt= function(idComponente){
  let valorCaja=recuperarTexto(idComponente);
  let valorEntero=parseInt(valorCaja);
  return valorEntero;
}

recuperarFloat= function(idComponente){
  let valorCaja=recuperarTexto(idComponente);
  let valorFloat=parseFloat(valorCaja);
  return valorFloat;
}