calcularPromedioNotas=function(){
    let n1=recuperarFloat("txtN1");
    let n2=recuperarFloat("txtN2");
    let n3=recuperarFloat("txtN3");
    let promedio=calcularPromedio(n1,n2,n3);
    let mensaje="Resultado: "+promedio;
   
    if (promedio<5 && promedio>0) {
        mostrarImagen("imgEstado","./imagenes/fracaso.gif");
        mostrarPromedio("lblEstado","REPROBADO");

    } else if(promedio>=5 && promedio<=8) {
        mostrarImagen("imgEstado","./imagenes/bueno.gif");
        mostrarPromedio("lblEstado","BUEN TRABAJO");
    }else if(promedio>8 && promedio<=10) {
        mostrarImagen("imgEstado","./imagenes/paso.gif");
        mostrarPromedio("lblEstado","EXCELENTE");
    }else{
        mostrarImagen("imgEstado","./imagenes/vacio.gif");
        mostrarPromedio("lblEstado","DATOS INCORRECTOS");
    }
    mostrarPromedio("lblResultado",mensaje);
    return promedio;
    
}