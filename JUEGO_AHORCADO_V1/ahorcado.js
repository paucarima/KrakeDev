//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
esMayuscula = function name(caracter) {
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