saludar = function(){ 
    //recuperar el valor de la caja  de txtnombre
    let nombre = recuperarTexto("txtNombre");
      //recuperar el valor de la caja  de txtApellido
    let apellido = recuperarTexto("txtApellido");

    let edad=recuperarInt("txtEdad");

    let estatura=recuperarFloat("txtEstatura");

    let mensajeBienvenida="Bienvenido "+nombre+" "+apellido;

    mostrarTexto("lblResultado",mensajeBienvenida);
    mostrarImagen("imgSaludo","./imagenes/ralf.gif");
    mostrarTextoEnCaja("txtNombre","")

}

