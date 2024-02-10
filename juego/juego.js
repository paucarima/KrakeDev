let puntosUsuarios=0;
let puntosComputador=0;

jugar=function (seleccionado) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
   let elemento=generarElemento(); //aqui trae numero aletorio    
   let jugadores=determinarGanador(seleccionado,elemento);//compara si es 1 o 2 o 0
     
   if (jugadores==0) {
    mostrarTexto("lblGanador","EMPATE");
    puntosUsuarios=puntosUsuarios+0;
    puntosComputador=puntosComputador+0;
    mostrarTexto("lblPuntosC",puntosComputador);
    mostrarTexto("lblPuntosUsu",puntosUsuarios);
    generarRuta(elemento); //aqui trae papel tijer piedra
   }
   if (jugadores==1) {                                                                                                                                                                                                                                 
    mostrarTexto("lblGanador","GANASTE LA PARTIDA");
    puntosUsuarios=puntosUsuarios+1;
    mostrarTexto("lblPuntosC",puntosComputador);
    mostrarTexto("lblPuntosUsu",puntosUsuarios);
    generarRuta(elemento); //aqui trae papel tijer piedra
   } 
   if (jugadores==2) {
    mostrarTexto("lblGanador","PERDISTE LA PARTIDA");
    puntosComputador=puntosComputador+1;
    mostrarTexto("lblPuntosC",puntosComputador);
    mostrarTexto("lblPuntosUsu",puntosUsuarios);
    //mostrarImagen("imgJuego",seleccionado);
    generarRuta(elemento); //aqui trae papel tijer piedra
   } 

   if (puntosUsuarios==5) {
    mostrarTexto("lblGanador","HAS GANADO EL JUEGO :D !!!!!");
    generarRuta(elemento); //aqui trae papel tijer piedra
    
   }else if (puntosComputador==5) {
    mostrarTexto("lblGanador","EL COMPUTADOR TE HA VENCIDO :(!!!!");
    generarRuta(elemento); //aqui trae papel tijer piedra
   
   }
}

limpiar=function(){
   mostrarTexto("lblGanador","?");
   mostrarTexto("lblPuntosC","0 PTS");
   mostrarTexto("lblPuntosUsu","0 PTS");
   puntosComputador=0;
   puntosUsuarios=0;
   mostrarImagen("imgJuego","");
}