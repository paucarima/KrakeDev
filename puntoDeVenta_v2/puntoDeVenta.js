calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT


    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    let resultadoFormato;
    let resultadoFormato1;
    let resultadoFormato2;
    let resultadoFormato3;
    //1. Recuperar el nombre del producto como String
    nombreProducto = recuperarTexto("txtProducto");
    //2. Recuperar el precio como float
    precioProducto=recuperarFloat("txtPrecio");
    //3. Recuperar cantidad como int
    cantidad=recuperarInt("txtCantidad");
    //4.Validar
    if (esProductoValido(nombreProducto, "lblErrorPD") & esPrecioValido(precioProducto, "lblErrorPR") & esCantidadValida(cantidad, "lblErrorCA")) {
        valorSubtotal=calcularSubtotal(precioProducto,cantidad);
        resultadoFormato = valorSubtotal.toFixed(2);
        mostrarTexto("lblSubtotal", resultadoFormato);
        valorDescuento=calcularDescuentoPorVolumen(valorSubtotal, cantidad);
        resultadoFormato1 = valorDescuento.toFixed(2);
        mostrarTexto("lblDescuento", resultadoFormato1);
        valorIVA=calcularIVA(valorSubtotal,valorDescuento);
        resultadoFormato2 = valorIVA.toFixed(2);
        mostrarTexto("lblValorIVA",resultadoFormato2);
        valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
        resultadoFormato3 = valorTotal.toFixed(2);
        mostrarTexto("lblTotal", resultadoFormato3);

    } else {
        limpiar();
    }

     
}          