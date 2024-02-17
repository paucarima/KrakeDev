probarAtributos = function () {
    let persona = {
        nombre: "Pedro",
        apellido: "Morales",
        edad: 24,
        estaVivo: true
    }

    console.log(persona.nombre);
    console.log(persona.edad);
    if (persona.estaVivo == false) {
        console.log("Esta muerto");
    } else {
        console.log("Esta vivo");
    }
}



crearProducto = function () {
    let producto1 = {
        nombre: "Laptop",
        precio: 15.50,
        stock: 7
    }
    let producto2 = {
        nombre: "Audifono",
        precio: 3.50,
        stock: 10
    }

    if (producto1.stock > producto2.stock) {
        console.log("El producto más stock es: " + producto1.nombre);
        console.log(producto1.nombre + "      " + producto2.nombre);
        console.log(producto1.stock + ", es mayor: " + producto2.stock);
    }

    if (producto1.stock < producto2.stock) {
        console.log("El producto más stock es: " + producto2.nombre);
        console.log(producto1.nombre + "      " + producto2.nombre);
        console.log(producto1.stock + ", es menor: " + producto2.stock);
    }
    if (producto1.stock == producto2.stock) {
        console.log("Productos stock iguales es: " + producto2.nombre + " " + producto1.nombre);
        console.log(producto1.nombre + "      " + producto2.nombre);
        console.log(producto1.stock + ", es igual: " + producto2.stock);
    }
}

modificarAtributos = function () {
    let cuenta = {
        numero: "5323423423",
        saldo: 0.0
    }
    cuenta.saldo = 100;
    cuenta.saldo += 10;
    console.log(cuenta.saldo);
}

crearCliente = function () {
    let cliente = {
        cedula: "171231",
        nombre: "JUAN"
    }

    let cliente1 = {};
    cliente1.nombre = "Romero";
    cliente1.apellido = "Salcedo";
    cliente1.cedula = "123123";
}
probarIncrementosaldo=function(){
    let cta={
        numero:"23424",
        saldo:34.0
    }
    incrementarSaldo(cta,100);
    console.log(cta.saldo);

}

probarDeterminarMayor=function () {
    let per1={nombre:"Daniel", edad:45};
    let per2={nombre:"Luisa",edad:48};
    let mayor;
    mayor=determinarMayor(per1,per2);
    if (mayor!=null) {
        console.log("El mayor es: "+mayor.nombre);
    }
}

incrementarSaldo=function (cuenta,monto) {
    cuenta.saldo+=monto;
}

determinarMayor=function (persona1,persona2) {
    if(persona1.edad>persona2.edad){
        return persona1;
    }else if (persona2.edad>persona1.edad) {
        return persona2;
    }else{
        return null;
    }
}

