//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;

esMayuscula = function (caracter) {
    let codigoLetra;
    for(let i=0; i<caracter.length; i++){
        codigoLetra=caracter.charCodeAt(i);
        if (codigoLetra >= 65 && codigoLetra <= 90) {
            return true;
        } else {
            return false;
        }
    }
    console.log("Mayusculas: "+codigoLetra);  
}

guardarPalabra=function () {
   let palabra= recuperarTexto("txtSecreta");
   if (!(palabra.length==5) && !(esMayuscula(palabra)==false)) {
      alert("La contrasenia debe tener 5 letras mayusculas");
      
   } else {
    palabraSecreta=palabra;
    console.log("Guardada: " +palabraSecreta);
   }
}