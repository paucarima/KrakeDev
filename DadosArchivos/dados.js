jugar=function(){
    let aleatorio;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
         let mensaje1="Es mayor a 3";
         let mensaje2="Ganaste";
         let mensajeFinal;
         
         mensajeFinal=mensaje1+" "+mensaje2;
         cambiarTexto("lblRespuesta",mensajeFinal);

         console.log("Es mayor a 3");
         console.log("Ganaste");

    }else{
        let mensaje1="Es menor a 3";
        let mensaje2="estas de mala";
        let mensajeFinal;
         
        mensajeFinal=mensaje1+" "+mensaje2;
        cambiarTexto("lblRespuesta",mensajeFinal);


        console.log("Es menor a 3");
        console.log("estas de mala");
    }


}

//Crear una funcion llamada lanzar Dado
 //no recibe parametros
 //retorna un numero aleatorio entre 1 y 6

 lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random();//entre 0  u  1
    numeroMultiplicado = aleatorio * 6;
    //console.log(numeroMultiplicado);
    numeroEntero= parseInt(numeroMultiplicado);//entre 0 y 5
    //console.log("------>", numeroEntero);
    valorDado=numeroEntero+1;//entre 0 y 6
    //console.log("----------->", valorDado);
    return valorDado;

 }