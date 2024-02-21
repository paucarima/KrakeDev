let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "5456456456", nombre: "Pancho", apellido: "Lopez", sueldo: 800.0 }
]


let esNuevo = false;



let roles = [{
    cedula: "-", nombre: "-",
    sueldo: "-", valorAPagar: 0,
    aporteEmpleado: 0, aporteEmpleador: 0
}];

//mostrar div
mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
    mostrarEmpleados();
}

mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    deshabilitarComponente("btnGuardarRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
    
}

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarRoles();
    mostrarTotales();
}



//final de mostrar

// mostrar empleados tabla
mostrarEmpleados = function () {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELDO</th>" +
        "<tr></tr>";
    let elementoEmpleado;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        contenidoTabla +=
            "<tr><td>" + elementoEmpleado.cedula + "</td>"
            + "<td>" + elementoEmpleado.nombre + "</td>"
            + "<td>" + elementoEmpleado.apellido + "</td>"
            + "<td>" + elementoEmpleado.sueldo + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

mostrarRoles = function () {
    let cmpTabla = document.getElementById("tablaResumen");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>SUELDO</th>" +
        "<th>VALOR A PAGAR</th>" +
        "<th>APORTE EMPLEADO</th>" +
        "<th>APORTE EMPLEADOR</th>" +
        "<tr></tr>";
    let elementoRol;
    for (let i = 0; i < roles.length; i++) {
        elementoRol = roles[i];
        contenidoTabla +=
            "<tr><td>" + elementoRol.cedula + "</td>"
            + "<td>" + elementoRol.nombre + "</td>"
            + "<td>" + elementoRol.sueldo + "</td>"
            + "<td>" + elementoRol.valorAPagar + "</td>"
            + "<td>" + elementoRol.aporteEmpleado + "</td>"
            + "<td>" + elementoRol.aporteEmpleador + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

//ejecutar nuevo empleado
ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}
ejecutarGuardar = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
    esNuevo = false;
}

ejecutarBusquedaHabilitar = function () {

    deshabilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");

}
buscarEmpleado = function (cedula) {
    let elementoEmpleado;
    let empleadoEncontrado = true;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        if (elementoEmpleado.cedula == cedula) {
            empleadoEncontrado = elementoEmpleado;
            break;
        }
    }

    return empleadoEncontrado;
}

agregarEmpleado = function (empleado) {
    esNuevo = buscarEmpleado(empleado.cedula);
    if (esNuevo == true) {
        empleados.push(empleado);
        alert("EMPLEADO GUARDADO CORRECTAMENTE ");
        mostrarEmpleados();
        ejecutarGuardar();

    } else {
        alert("Ya existe el empleado con la cedula: " + empleado.cedula);
        esNuevo = false
    }
}

modificarEmpleado = function (empleado) {
    empleadoEncontrado = buscarEmpleado(empleado.cedula);
    if (empleadoEncontrado != false) {
        empleadoEncontrado.nombre = empleado.nombre;
        empleadoEncontrado.apellido = empleado.apellido;
        empleadoEncontrado.apellido = empleado.apellido;
        empleadoEncontrado.apellido = empleado.sueldo;
        alert("EMPLEADO MODIFICADO EXITOSAMENTE");

    }
}

guardar = function () {

    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");
    let resultados = validar(valorCedula, valorNombre, valorApellido, valorSueldo);

    if (resultados == 0) { //Si no  hay 0 errores
        let nuevoEmpleado = {};
        nuevoEmpleado.cedula = valorCedula;
        nuevoEmpleado.nombre = valorNombre;
        nuevoEmpleado.apellido = valorApellido;
        nuevoEmpleado.sueldo = valorSueldo;
        agregarEmpleado(nuevoEmpleado);

        modificarEmpleado(nuevoEmpleado);
        mostrarEmpleados();
        ejecutarGuardar();

    } else {
        console.log("hay errores: " + resultados);//Muestra mensajes de error
    }


}

ejecutarBusqueda = function () {
    let valorCedula = recuperarTexto("txtBusquedaCedula");
    let rastrearEmpleado = buscarEmpleado(valorCedula);
    if (rastrearEmpleado == true) { //verdadero pq es  nuevo o no encotro
        alert("EL EMPLEADO NO EXISTE");
    } else {
        mostrarTextoEnCaja("txtCedula", rastrearEmpleado.cedula);
        mostrarTextoEnCaja("txtNombre", rastrearEmpleado.nombre);
        mostrarTextoEnCaja("txtApellido", rastrearEmpleado.apellido);
        mostrarTextoEnCaja("txtSueldo", rastrearEmpleado.sueldo);
        ejecutarBusquedaHabilitar();
    }

}
validar = function (cedula, nombre, apellido, sueldo) {

    let errorCampo = 0;

    if (!(contarDigito(cedula) == 10)) {
        mostrarTexto("lblErrorCedula", "La cedula debe tener 10 digitos");
        errorCampo++;
    }
    if (contarMayusculas(nombre) < 3) {
        mostrarTexto("lblErrorNombre", "El nombre debe contener al menos 3 letras mayusculas");
        errorCampo++;
    }
    if (contarMayusculas(nombre) == 0) {
        mostrarTexto("lblErrorNombre", "El nombre debe ser mayusculas");
        errorCampo++;
    }
    if (contarMayusculas(apellido) < 3) {
        mostrarTexto("lblErrorApellido", "El apellido debe contener al menos 3 letras mayusculas");
        errorCampo++;
    }
    if (contarMayusculas(apellido) == 0) {
        mostrarTexto("lblErrorApellido", "El apellido debe ser mayusculas");
        errorCampo++;
    }
    if (isNaN(sueldo)) {
        mostrarTexto("lblErrorSueldo", "Ingrese solo numeros en el campo Sueldo");
        errorCampo++;

    }
    if (!(sueldo >= 400 && sueldo <= 500)) {
        mostrarTexto("lblErrorSueldo", "Solo se ingresa de 400 a 500 dolares");
        errorCampo++;
    }

    return errorCampo;


}

limpiar = function () {
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    esNuevo = false;
    ejecutarGuardar();
}

limpiarRol=function(){
    mostrarTexto("infoIESS","");
    mostrarTexto("infoPago","");
}
contarDigito = function (cadena) {
    let digito;
    let contadorDigitos = 0;
    for (let j = 0; j < cadena.length; j++) {
        digito = cadena.charCodeAt(j); //Convierte el carácter a su correspondiente valor numérico.
        if (esDigito(digito) == true) {
            contadorDigitos++;
        }
    }
    console.log("Digitos: " + contadorDigitos);
    return contadorDigitos;
}


contarMayusculas = function (cadena) {
    let letra;
    let contadorMayusculas = 0;
    for (let i = 0; i < cadena.length; i++) {
        letra = cadena.charCodeAt(i);
        if (esMayuscula(letra) == true) {
            contadorMayusculas = contadorMayusculas + 1;
        }
    }
    console.log("Mayusculas: " + contadorMayusculas);
    return contadorMayusculas;
}



buscarPorRol = function () {
    let valorCedula = recuperarTexto("txtBusquedaCedulaRol");
    let rastrearEmpleado = buscarEmpleado(valorCedula);
    let juntarCadena;

    if (rastrearEmpleado == true) {
        alert("El empleado no existe");
    } else {

        mostrarTexto("infoCedula", rastrearEmpleado.cedula);
        juntarCadena = rastrearEmpleado.nombre + " " + rastrearEmpleado.apellido;
        mostrarTexto("infoNombre", juntarCadena);
        mostrarTexto("infoSueldo", rastrearEmpleado.sueldo);
        limpiarRol();

    }

}


calcularAporteEmpleado = function (sueldo) {

    let porcentaje = (9.45 / 100) * sueldo; //9.45 es el % d
    return porcentaje;
}

calcularValorAPagar = function (sueldo, iess, descuento) {

    let totalDescuentos = descuento + iess;
    let salarioNeto = (sueldo - totalDescuentos);
    return salarioNeto;
}

calcularRol = function () {
    let valorSueldo = recuperarFloatDiv("infoSueldo");
    let valorDescuento = recuperarFloatDivCaja("txtDescuentos");
    if (valorDescuento % 1 == 0 || isNaN(valorDescuento)) {
        alert("El descuento es decimal");
    } else if (valorDescuento < 0) {
        alert("El descuento debe ser mayor cero");
    } else if (valorDescuento > valorSueldo) {
        alert("El descuento no puede superar al sueldo");
    } else {
        let iess = calcularAporteEmpleado(valorSueldo).toFixed(2);
        mostrarTexto("infoIESS", iess);
        let iessFloat = parseFloat(iess);
        let valorSalarioNeto = calcularValorAPagar(valorSueldo, iessFloat, valorDescuento).toFixed(2);
        mostrarTexto("infoPago", valorSalarioNeto);
        habilitarComponente("btnGuardarRol");
    }

}

/**agregarRol
rol - objeto rol a ser agregado
Agrega el objeto al arreglo siempre y cuando no exista otro con la
misma cédula, mostrar los mensajes en caso de éxito o error.
no retorna nada*/
buscarRol = function (cedula) {
    let elementoEmpleado;
    let empleadoEncontrado = null;
    for (let i = 0; i < roles.length; i++) {
        elementoEmpleado = roles[i];
        if (elementoEmpleado.cedula == cedula) {
            empleadoEncontrado = elementoEmpleado; 
            break;
        }
    }

    return empleadoEncontrado;
}

agregarRol = function (rol) {
    let resultado;
    resultado = buscarRol(rol.cedula);
    if (resultado == null) {
        roles.push(rol); 
        alert("Rol agregado");
        deshabilitarComponente("btnGuardarRol");
    } else {
        alert("Ya existe el rol con la cedula: " + rol.cedula + ". Intente de nuevo.");
    }
}

/*calcularAporteEmpleador
sueldo - sueldo del empleado
Calcula el valor que debe pagar el empleador al IESS, este corresponde
al 11.15% del sueldo
El valor que debe pagar el empleador al lESS*/

calcularAporteEmpleador = function (sueldo) {
    let valorEmpleadorIess;
    valorEmpleadorIess = (sueldo * 0.1115).toFixed(2); //aporte del empleador al ieeees
    return valorEmpleadorIess;
}

guardarRol = function () {
    /**Toma de la pantalla los montos de valor a pagar, aporte al iess del
empleado, nombre, cédula y sueldo.
Llama a la función calcularAporte Empleador y guarda el resultado en
una variable.
Crea un objeto rol sin atributos
Agrega los atributos del objeto, llenando sus valores con lo que tomó de
pantalla o lo que calculo.
Invoca a agregarRol
Muestra un mensaje de éxito y deshabilita el botón GUARDAR
no retorna nada */
    let valorCedula = recuperarTextoDiv("infoCedula");
    let valorNombre = recuperarTextoDiv("infoNombre");
    let valorSueldo = recuperarFloatDiv("infoSueldo");
    let valorAPagar = recuperarFloatDiv("infoPago");
    let valorEmpleado = recuperarFloatDiv("infoIESS");
    let sueldoEmpleador = parseFloat(calcularAporteEmpleador(valorSueldo));
    

    let nuevoRol = {};
    nuevoRol.cedula = valorCedula;
    nuevoRol.nombre = valorNombre;
    nuevoRol.sueldo = valorSueldo;
    nuevoRol.valorAPagar = valorAPagar;
    nuevoRol.aporteEmpleado = valorEmpleado;
    nuevoRol.aporteEmpleador = sueldoEmpleador;
    agregarRol(nuevoRol);
    

}

mostrarTotales = function(){
    /**Crear las variables totalEmpleado, totalEmpleador, totalAPagar */
    let  totalEmpleado=0;
    let totalEmpleador=0;
    let totalAPagar=0;
    let totalNomina=0;

    /**Barrer todo el arreglo de roles, en cada iteración ir sumando a cada
variable el valor correspondiente del rol que itera.
Por ejemplo en totalEmpleado ir sumando el valor del atributo
aporteEmpleado.
Al salir del for mostrar las 3 variables en pantallas, en los campos
respectivos
valorAPagar: 0,
    aporteEmpleado: 0, aporteEmpleador: 0 */
            for (let i = 0; i < roles.length; i++) {
                totalEmpleado+=roles[i].aporteEmpleado;
                totalEmpleador+=roles[i].aporteEmpleador;
                totalAPagar+=roles[i].valorAPagar;                
            }
            totalNomina=totalEmpleado+totalEmpleador+totalAPagar;
            mostrarTexto("infoTotalPago", totalAPagar);
            mostrarTexto("infoAporteEmpresa", totalEmpleador);
            mostrarTexto("infoAporteEmpleado", totalEmpleado);
            mostrarTexto("infoNomina", totalNomina);


}