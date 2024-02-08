validarEstructura = function (placa) {

    let codigoAscii1 = placa.charCodeAt(0);
    let codigoAscii2 = placa.charCodeAt(1);
    let codigoAscii3 = placa.charCodeAt(2);
    let codigoAscii4 = placa.charCodeAt(3);
    let codigoAscii5 = placa.charCodeAt(4);
    let codigoAscii6 = placa.charCodeAt(5);
    let codigoAscii7 = placa.charCodeAt(6);
    let codigoAscii8 = placa.charCodeAt(7);


    let erorres = null

    if (placa.length == 7 || placa.length == 8) {
    

        if (esMayuscula(codigoAscii1, "lblErrorPlacaM") & esMayuscula(codigoAscii2, "lblErrorPlacaM") & esMayuscula(codigoAscii3, "lblErrorPlacaM")) {
            mostrarTexto("lblValidacion", "Placa Válida");
            erorres = null;

        }
        if (esMayuscula(codigoAscii1, "lblErrorPlacaM") == false) {
            mostrarTexto("lblErrorPlacaM1", "El primer caracter debe ser una mayúscula");
            mostrarTexto("lblValidacion", "Placa inválida");
            erorres = true;

        }
        if (esMayuscula(codigoAscii2, "lblErrorPlacaM") == false) {
            mostrarTexto("lblErrorPlacaM2", "El segundo caracter debe ser una mayúscula");
            mostrarTexto("lblValidacion", "Placa inválida");
            erorres = true;

        }
        if (esMayuscula(codigoAscii3, "lblErrorPlacaM") == false) {
            mostrarTexto("lblErrorPlacaM3", "El tercero caracter debe ser una mayúscula");
            mostrarTexto("lblValidacion", "Placa inválida");
            erorres = true;

        }

        //Validar guion
        if (esGuion(codigoAscii4, "lblErrorPlacaG")) {
           
            erorres = null;

        }
        if (esGuion(codigoAscii4, "lblErrorPlacaG") == false) {
            mostrarTexto("lblErrorPlacaG", "El cuarto caracter debe ser un: -");
            mostrarTexto("lblValidacion", "Placa inválida");
            erorres = true;
        }


        //validar digito
        if (esDigito(codigoAscii5, "lblErrorPlacaD") & esDigito(codigoAscii6, "lblErrorPlacaD") & esDigito(codigoAscii7, "lblErrorPlacaD")) {
            
                erorres = null; 
            if (esDigito(codigoAscii8, "lblErrorPlacaD")) {
            
                erorres = null;
            }
          
        } else if (esDigito(codigoAscii8, "lblErrorPlacaD") == false) {
            mostrarTexto("lblErrorPlacaD8", "El octavo caracter debe ser un dígito");
            mostrarTexto("lblValidacion", "Placa inválida");
            erorres = true;
        }
        if (esDigito(codigoAscii5, "lblErrorPlacaD") == false) {
            mostrarTexto("lblErrorPlacaD5", "El quinto caracter debe ser un dígito");
            mostrarTexto("lblValidacion", "Placa inválida");
            erorres = true;
        }
        if (esDigito(codigoAscii6, "lblErrorPlacaD") == false) {
            mostrarTexto("lblErrorPlacaD6", "El sexto caracter debe ser un dígito");
            mostrarTexto("lblValidacion", "Placa inválida");
            erorres = true;
        }
        if (esDigito(codigoAscii7, "lblErrorPlacaD") == false) {
            mostrarTexto("lblErrorPlacaD7", "El séptimo caracter debe ser un dígito");
            mostrarTexto("lblValidacion", "Placa inválida");
            erorres = true;
        }            
        
       
    } else {
        mostrarTexto("lblErrorPlacaM", "Placa debe estar entre 7 o 8 caracteres");
        mostrarTexto("lblValidacion", "Placa inválida");
        erorres = true;
    }

    return erorres;
}

obtenerDiaPicoYPlaca=function(placaPico) {

    let ultimoCaracter =placaPico.charAt(placaPico.length - 1);
    let dia;
    if (placaPico.length === 7 || placaPico.length === 8) {
        if (ultimoCaracter == "1" || ultimoCaracter == "2"){
            dia="Lunes";
            mostrarTexto("lblPicoPlaca", dia);
            return null;
        } else if (ultimoCaracter == "3" || ultimoCaracter == "4"){
            dia="Martes";
            mostrarTexto("lblPicoPlaca", dia);
            return null;
        } else if (ultimoCaracter == "5" || ultimoCaracter == "6"){
            dia="Miércoles";
            mostrarTexto("lblPicoPlaca", dia);
            return null;
        }else if (ultimoCaracter == "7" || ultimoCaracter == "8"){
            dia="Jueves";
            mostrarTexto("lblPicoPlaca", dia);
            return null;
        }else if (ultimoCaracter == "9" || ultimoCaracter == "0"){
            dia="Viernes";
            mostrarTexto("lblPicoPlaca", dia);
            return null;
        }else{
            dia="Fin de Semana o feriado ";
            mostrarTexto("lblPicoPlaca", dia);
            return null;
        }  
    }else{
        return true;
    } 
      
}