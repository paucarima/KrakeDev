recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarFloat= function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorFloat=parseFloat(valorCaja);
    return valorFloat;
  }

  mostrarPromedio=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText= mensaje;
  }