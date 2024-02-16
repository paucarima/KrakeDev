let notas=[];

agregarElementos=function(){
        notas.push(5);
        notas.push(10);
        console.log(notas.length);
}

mostrarNotas=function(){
    let cmpTabla=document.getElementById("divTabla");
    let contenidoTabla="<table><tr><th>NOTA</th></tr>";
    let miNota;
    for (let i = 0; i < notas.length; i++){
        miNota=notas[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=miNota;
        contenidoTabla+="</tr></td>";
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}

probarAgregar=function () {
    let notaRecuperada;
    notaRecuperada=recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}
agregarNota=function (nota) {
    notas.push(nota);
    mostrarNotas();
}

recorrerArreglo=function(){
    let notaR;
    for (let indice = 0; indice < notas.length; indice++) {
        notaR = notas[indice];
        console.log(notaR);
    }
}

generarTabla =function () {
    let  contenidoTabla="";
    let cmpTabla =document.getElementById("divTabla");
    contenidoTabla+= "<table><tr><td>UNO</td></tr></table>"+
    "<tr><td>DOS</td></tr></table>";
    cmpTabla.innerHTML=contenidoTabla;
}

calcularPromedio=function(){
    let sumaNotas=0;
    let promedio=0;
    for (let  indice = 0;  indice < notas.length;  indice++) {
        sumaNotas = notas[indice]+sumaNotas;
        
    }
    promedio=sumaNotas/notas.length;
    return promedio;
}

ejecutarPromedio=function(){
    
    let promedio=calcularPromedio();
    mostrarTexto("lblPromedio",promedio);
    return promedio;
}