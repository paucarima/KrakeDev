
calcularSubtotal = function (precio, unidad) {
    let subtotal = precio * unidad;
    return subtotal;
}
calcularIVA = function (valorSubtotalDeIva, valorDescuento) {
    let iva = (valorSubtotalDeIva - valorDescuento) * 0.12;
    return iva;
}
calcularTotal = function (valorSubtotal, porcentaje, valorIVA) {
    let totalEsperado = valorSubtotal - porcentaje + valorIVA;
    return totalEsperado;
}
//calucla el valor del descuento que se aplica al subtotal
//no en porcentaje sino en monto.El descuento depende de la cantidad
// menos de 3 productos no tiene descuento
//de 3 a 5 productos, el 3 %
//de 6 a 11 productos  el 4%
//mas de 12 productos el 5%
calcularDescuentoPorVolumen = function (subtotal, cantidad) {
    let descuento = 0;
     if (cantidad >= 3 && cantidad <= 5) {
        descuento = subtotal * 0.03; // 3% de descuento
    } else if (cantidad >= 6 && cantidad <= 11) {
        descuento = subtotal * 0.04; // 4% de descuento
    } else if (cantidad >= 12) {
        descuento = subtotal * 0.05; // 5% de descuento
    }

    return descuento;
}

limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */

    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtCantidad", "0.0");
    mostrarTextoEnCaja("txtPrecio", "0.0");
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0%");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
}

esPrecioValido = function (precio, idComponenteError) {
    let hayErrores = false;
    if (isNaN(precio)) {
        mostrarTexto(idComponenteError, "Campo Obligatorio");
        hayErrores = true;
    }
    if (precio < 0 || precio > 50) {
        mostrarTexto(idComponenteError, "El numero debe estar entre 0 y 50");
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
    }

    return !hayErrores;
}
esProductoValido = function (producto, idComponenteError) {
    let hayErrores = false;
    if (typeof producto !=='string' || producto=="") {
        mostrarTexto(idComponenteError, "Campo Obligatorio");
        hayErrores = true;
    }
    if (producto.length > 10) {
        mostrarTexto(idComponenteError, "no debe tener mas de 10 caracteres");
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
    }

    return !hayErrores;
}

esCantidadValida = function (cantidad, idComponenteError) {
    let hayErrores = false;
    if (isNaN(cantidad)) {
        mostrarTexto(idComponenteError, "Campo Obligatorio");
        hayErrores = true;
    }
    if (cantidad < 0 || cantidad > 100 || !Number.isInteger(cantidad)) {
        mostrarTexto(idComponenteError, "El numero debe estar entre 0 y 100");
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
    }

    return !hayErrores;
} 