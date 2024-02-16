


aleatorioNum = function () {
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio = Math.random();
    aleatorioMultiplicado = aleatorio * 100;
    aleatorioEntero = parseInt(aleatorioMultiplicado);
    valorDado = aleatorioEntero + 1;
    //console.log(valorDado);
    return valorDado;
}

generarAleatorios = function () {
    let numero=0;
    let aleatorios = [];
    let guardarAle;
    numero = recuperarInt("txtNumero");
    if (numero >= 5 && numero <= 20) {
        for (let i = 0; i < numero; i++) {

            guardarAle = aleatorioNum();
            aleatorios.push(guardarAle);
            console.log(guardarAle+" "+i);
        }
       
    }
    mostrarResultados(aleatorios);

}

mostrarResultados = function (arregloNumeros) {
    let cmpTabla=document.getElementById("divTabla");
    let contenidoTabla="<table><tr><th>NUM</th></tr>";
   
    for (let i = 0; i < arregloNumeros.length; i++) {
  
        contenidoTabla+="<tr><td>";
        contenidoTabla+=arregloNumeros[i];
        contenidoTabla+="</tr></td>";
        
    }
       
    
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}

