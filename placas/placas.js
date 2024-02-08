validarPlaca = function () {
    let placa = recuperarTexto("txtPlaca");
    let erroresEstructura = validarEstructura(placa);
    let provincia;
    let tipoVehiculo;
    let picoPlaca;
    if (erroresEstructura == null) {
        mostrarTexto("lblEstructura", "Estructura Válida.");
        provincia = obtenerProvincia(placa);
        tipoVehiculo=obtenerTipoVehiculo(placa);
        picoPlaca=obtenerDiaPicoYPlaca(placa);
    } else {
        mostrarTexto("lblEstructura", "Estructura Incorrecta.");
    }
}
obtenerProvincia = function (placa) {
    let primeraLetra = placa.charAt(0);
    let provincia;
    if (primeraLetra == "A") {
        mostrarTexto("lblProvincia", "Azuay");
        provincia = "Azuay";
    }
    if (primeraLetra == "B") {
        mostrarTexto("lblProvincia", "Bolívar");
        provincia = "Bolivar";
    }
    if (primeraLetra == "U") {
        mostrarTexto("lblProvincia", "Cañar");
        provincia = "Cañar";
    }
    if (primeraLetra == "C") {
        mostrarTexto("lblProvincia", "Carchi");
        provincia = "Carchi";
    }
    if (primeraLetra == "X") {
        mostrarTexto("lblProvincia", "Cotopaxi");
        provincia = "Cotopaxi";
    }
    if (primeraLetra == "H") {
        mostrarTexto("lblProvincia", "Chimborazo");
        provincia = "Chimborazo";
    }
    if (primeraLetra == "O") {
        mostrarTexto("lblProvincia", "El Oro");
        provincia = "Oro";
    }
    if (primeraLetra == "E") {
        mostrarTexto("lblProvincia", "Esmeraldas");
        provincia = "Esmeraldas";
    }
    if (primeraLetra == "W") {
        mostrarTexto("lblProvincia", "Galápagos");
        provincia = "Galapagos";
    }
    if (primeraLetra == "G") {
        mostrarTexto("lblProvincia", "Guayas");
        provincia = "Guayaquil";
    }
    if (primeraLetra == "I") {
        mostrarTexto("lblProvincia", "Imbabura");
        provincia = "Imbabura";
    }
    if (primeraLetra == "L") {
        mostrarTexto("lblProvincia", "Loja");
        provincia = "Loja";
    }
    if (primeraLetra == "R") {
        mostrarTexto("lblProvincia", "Los Ríos");
        provincia = "Rios";
    }
    if (primeraLetra == "M") {
        mostrarTexto("lblProvincia", "Manabí");
        provincia = "Manabi";
    }
    if (primeraLetra == "V") {
        mostrarTexto("lblProvincia", "Morona Santiago");
        provincia = "Santiago_province";
    }
    if (primeraLetra == "N") {
        mostrarTexto("lblProvincia", "Napo");
        provincia = "Napo";
    }
    if (primeraLetra == "S") {
        mostrarTexto("lblProvincia", "Pastaza");
        provincia = "Pastaza";
    }
    if (primeraLetra == "P") {
        mostrarTexto("lblProvincia", "Pichincha");
        provincia = "Pichina";
    }
    if (primeraLetra == "K") {
        mostrarTexto("lblProvincia", "Sucumbíos");
        provincia = "Zamora";
    }
    if (primeraLetra == "Q") {
        mostrarTexto("lblProvincia", "Orellana");
        provincia = "Orellana";
    }
    if (primeraLetra == "T") {
        mostrarTexto("lblProvincia", "Tungurahua");
        provincia = "Tungurahua";
    }
    if (primeraLetra == "Z") {
        mostrarTexto("lblProvincia", "Zamora Chinchipe");
        provincia = "Zamora Chinchipa";
    }
    if (primeraLetra == "Y") {
        mostrarTexto("lblProvincia", "Santa Elena");
        provincia = "Santa Elena";
    }
    if (!(primeraLetra == "A" || primeraLetra == "B" || primeraLetra == "U" || primeraLetra == "C" || primeraLetra == "X" || primeraLetra == "H" || primeraLetra == "O" || primeraLetra == "E" || primeraLetra == "W" || primeraLetra == "G" || primeraLetra == "I" || primeraLetra == "L" || primeraLetra == "R" || primeraLetra == "M" || primeraLetra == "V" || primeraLetra == "N" || primeraLetra == "S" || primeraLetra == "P" || primeraLetra == "K" || primeraLetra == "Q" || primeraLetra == "T" || primeraLetra == "Z" || primeraLetra == "Y")) {
        mostrarTexto("lblProvincia", "Provincia incorrecta");
        return null;
    }
    return provincia;

}

obtenerTipoVehiculo = function (placaTipo) {
    let segundaLetra = placaTipo.charAt(1);
    let tipo;
    if (segundaLetra == "A" || segundaLetra == "Z") {
        mostrarTexto("lblTipo", "Taxis o Autobus");
        tipo = "Taxis-Autobus";
    }
    if (segundaLetra == "E") {
        mostrarTexto("lblTipo", "Gubernamentales");
        tipo = "Gubernamentales";
    }
    if (segundaLetra == "X") {
        mostrarTexto("lblTipo", "Uso Oficial");
        tipo = "Uso Oficial";
    }
    if (segundaLetra == "S") {
        mostrarTexto("lblTipo", "Gobierno Provincia");
        tipo = "Gobierno Provincia";
    }
    if (segundaLetra == "M") {
        mostrarTexto("lblTipo", "Municipal");
        tipo = "Municipal";
    }
    if (!(segundaLetra == "A" || segundaLetra == "Z" || segundaLetra == "E" || segundaLetra == "X" || segundaLetra == "S" || segundaLetra == "M")) {
        mostrarTexto("lblTipo", "Particular");
        tipo = "Municipal";
    }
    if(!isNaN(segundaLetra)){
        mostrarTexto("lblTipo", "Tipo vehículo incorrecto");
        return null;
    }
    return tipo; 
}

limpiar = function(){
    mostrarTextoEnCaja("txtPlaca", "");
    mostrarTexto("lblErrorPlacaM", "");
    mostrarTexto("lblErrorPlacaM1", "");
    mostrarTexto("lblErrorPlacaM2", "");
    mostrarTexto("lblErrorPlacaM3", "");
    mostrarTexto("lblErrorPlacaG", "");
    mostrarTexto("lblErrorPlacaD", "");
    mostrarTexto("lblErrorPlacaD5", "");
    mostrarTexto("lblErrorPlacaD6", "");
    mostrarTexto("lblErrorPlacaD7", "");
    mostrarTexto("lblErrorPlacaD8", "");
    mostrarTexto("lblValidacion", "");
    mostrarTexto("lblEstructura", "");
    mostrarTexto("lblProvincia", "");
    mostrarTexto("lblTipo", "");
    mostrarTexto("lblPicoPlaca", "");


   
 
}