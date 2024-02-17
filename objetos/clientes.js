
let clientes = [
    { cedula: "123456", nombre: "Juan", edad: 20 },
    { cedula: "789012", nombre: "María", edad: 18 },
    { cedula: "754544", nombre: "Pepe", edad: 50 },
];

guardarCambios=function() {
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarFloat("txtEdad");

    let datosCliente={};
    datosCliente.cedula=valorCedula;
    datosCliente.nombre=valorNombre;    
    datosCliente.edad=valorEdad;

    modificarCliente(datosCliente);
    mostrarClientes();
}
modificarCliente= function(cliente){
    let clienteEncontrado=buscarCliente(cliente.cedula);
    if (clienteEncontrado!=null) {
        clienteEncontrado.nombre=cliente.nombre;
        clienteEncontrado.edad=cliente.edad;
    }
}
ejecutarBusqueda=function(){
    let valorCedula=recuperarTexto("txtCedulaBusqueda");
    let cliente=buscarCliente(valorCedula);
    if (cliente==null){
        alert("No se encontró al cliente con la cédula "+valorCedula+".");
    }else{
        mostrarTextoEnCaja("txtCedula",cliente.cedula);
        mostrarTextoEnCaja("txtNombre",cliente.nombre);
        mostrarTextoEnCaja("txtEdad",cliente.edad);
    }
}
crearCliente=function(){
    let  valorCedula=recuperarTexto("txtCedula");
    let  valorNombre=recuperarTexto("txtNombre");
    let  valorEdad=recuperarFloat("txtEdad");

    let nuevoCliente={};
    nuevoCliente.cedula=valorCedula;
    nuevoCliente.nombre=valorNombre;
    nuevoCliente.edad=valorEdad;

    agregarCliente(nuevoCliente);
}

mostrarClientes = function () {
    let cmpTabla = document.getElementById("tablaClienetes");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>EDAD</th>" +
        "<tr></tr>";
    let elementoCliente;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        contenidoTabla +=
            "<tr><td>" + elementoCliente.cedula + "</td>"
            + "<td>" + elementoCliente.nombre + "</td>"
            + "<td>" + elementoCliente.edad + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}
agregarCliente = function (cliente) {
    let resultado;
    resultado = buscarCliente(cliente.cedula);

    if (resultado==null) {
        clientes.push(cliente);
        alert("cliente agregado");
        mostrarClientes();
    } else {
        alert("Ya existe el cliente con la cedula: "+cliente.cedula+". Intente de nuevo.");
    }

}

buscarCliente = function (cedula) {
    let elementoCliente;
    let clienteEncontrado = null;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        if (elementoCliente.cedula == cedula) {
            clienteEncontrado = elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}
