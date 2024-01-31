calcularPromedioNotas=function(){
    let n1=recuperarFloat("txtN1");
    let n2=recuperarFloat("txtN2");
    let n3=recuperarFloat("txtN3");
    let promedio=calcularPromedio(n1,n2,n3);
    if (promedio>7) {
        mostrarImagen("imgEstado","./imagenes/paso.gif");
    } else {
        mostrarImagen("imgEstado","./imagenes/fracaso.gif");
    }
    mostrarPromedio("lblResultado",promedio);
    return promedio;
    
}