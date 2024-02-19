let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "5456456456", nombre: "Pancho", apellido: "Lopez", sueldo: 800.0 }
]


let esNuevo = false;

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
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
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
buscarEmpleado = function (cedula) {
    let elementoEmpleado;
    empleadoEncontrado = true;
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
        alert("Ya existe el empleado con la cedula: " + empleado.cedula + ". Intente de nuevo.");
    }
}
/*Para saber si es un nuevo cliente, validar el valor de la variable
esNuevo.
Si esNuevo es true, entonces:
• Crear un objeto empleado sin atributos
• Agregar al objeto los atributos cedula, nombre, apellido, sueldo,
con los valores que se recuperaron de las cajas de texto.
• Invocar a agregarEmpleado
• Guardar el retorno de agregarEmpleado a una variable y en base
a este retorno: Si guardó el empleado mostrar un alert con el
mensaje EMPLEADO GUARDADO CORRECTAMENTE y llamar
a la función que muestra los empleados en la tabla, caso*/
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

    } else {
        console.log("hay errores: " + resultados);//Muestra mensajes de error
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