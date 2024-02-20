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

ejecutarBusquedaHabilitar = function () {

    deshabilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");

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
/**En la función guardar
• Con la variable esNuevo se sabe si se está creando un cliente nuevo o se
está modificando uno. Cuando presionamos el botón nuevo, la variable
esNuevo se coloca en true, en algún momento debe hacerse false
nuevamente. Dentro de la función guardar, cuando ya se guarda el empleado
de forma exitosa, colocar la variable esNuevo en false.
• Si el empleado no es nuevo, debemos modificar los datos, para esto:
Invocar a la función buscarEmpleado y guardar el retorno en una
vanable.
Setear los datos de nombre apellido y saldo de este empleado
recuperado, con los valores correspondientes ingresados en la caja de texto.
Mostrar un mensaje EMPLEADO MODIFICADO EXITOSAMENTE
Invocar a la función que pinta la tabla de empleados, validar que se
modificaron los datos
Luego de guardar exitosamente, deshabilitar las 4 cajas y el botón
GUARDAR
Si todo funciona bien hacer un commit */
agregarEmpleado = function (empleado) {
    esNuevo = buscarEmpleado(empleado.cedula);
    if (esNuevo == true) {
        empleados.push(empleado);
        alert("EMPLEADO GUARDADO CORRECTAMENTE ");
        mostrarEmpleados();
        ejecutarGuardar();
        
    } else {
        alert("Ya existe el empleado con la cedula: " + empleado.cedula);
        esNuevo=false
    }
}

modificarEmpleado= function(empleado){
    empleadoEncontrado=buscarEmpleado(empleado.cedula);
    if (empleadoEncontrado!=false) {
        empleadoEncontrado.nombre=empleado.nombre;
        empleadoEncontrado.apellido=empleado.apellido;
        empleadoEncontrado.apellido=empleado.apellido;
        empleadoEncontrado.apellido=empleado.sueldo;
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

