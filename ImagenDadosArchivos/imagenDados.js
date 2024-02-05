let puntos;
puntos=0;
let lanzamientos;
lanzamientos=5;


jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
   modificarPuntos(resultado);
}
modificarPuntos=function(numero){
puntos=puntos+numero;
cambiarTexto("lblPuntos",puntos);
//si el jugador obtiene mas de 20 puntos
if(puntos>20){

    cambiarImagen("imgEstado","./imagenes/gane.gif");
    //mostrar en pantalla un mensaje de ganaste
    //colocar puntaje en 0 y lanzamiento en 5
    let mensaje="Super Ganaste :) tu puntaje es: "+puntos;
    cambiarTexto("lblRespuesta", mensaje);
    limpiar();
}else{
    modificarLanzamientos();
}

}
//no recibe paramentros

modificarLanzamientos=function(){
    
    //resta  1 a la varia ble lazamientos, guarda el resultado en la misma varible
//y muestra en pantalla 
    lanzamientos=lanzamientos-1;
    cambiarTexto("lblLanzamiento",lanzamientos);
    //si lanzamiento llega 0
    if(lanzamientos==0){
        cambiarImagen("imgEstado","./imagenes/perdi.gif");
        //mostrar en pantalla el mensaje GAME OVER
        let mensaje="GAME OVER :( tu puntaje es: "+puntos;
        cambiarTexto("lblRespuesta", mensaje);
        //INVOCA a limpiar
        limpiar();
    } 
    
}

limpiar=function(){
    //colocar puntaje en 0 y lanzamiento en 5
    cambiarTexto("lblPuntos",0);
    cambiarTexto("lblLanzamiento",5);
    //quitar img en ""
    cambiarImagen("imgDado","");
}




 //funcion , recibe el numero que quiere mostrar
 //muestra la imagen correspondiente al numero que recibe
 // no retorna nada
mostrarCara=function(numero){
    if(numero==1){  //con == se compara, mientrar que con = se asigna
        cambiarImagen("imgDado","dados1.png");
    }else if(numero==2){
        cambiarImagen("imgDado","dados2.png");
    }else if(numero==3){
        cambiarImagen("imgDado","dados3.png");
    }else if(numero==4){
        cambiarImagen("imgDado","dados4.png");
    }else if(numero==5){
        cambiarImagen("imgDado","dados5.png");
    }else if(numero==6){
        cambiarImagen("imgDado","dados6.png");
    }
}


lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}