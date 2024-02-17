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

/*En objetos.js crear una función llamada crearProducto, no recibe parámetros y ejecuta la siguiente lógica:
1. Crea una variable llamada producto1, esta variable será un objeto con atributos nombre (String), precio (float), stock (int). Colocar los valores que usted desee en cada atributo.
2. Crear una variable llamada producto2, con los mismos atributos, pero distintos valores asignados en cada uno.
3. Imprimir en consola el nombre del producto1
4. Imprimir en consola el precio del producto2
5. Comparar el stock del producto1 con el stock del producto2. Imprimir una de las 3 sentencias según el caso: 
Producto 1 tiene mayor stock, Producto 2 tiene mayor stock o Ambos productos tienen el mismo stock.
6. Agregar un botón a la página y probar.*/

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
        console.log("El producto más stock es: "+producto1.nombre);
        console.log(producto1.nombre+"      "+producto2.nombre);
        console.log(producto1.stock + ", es mayor: " + producto2.stock);
    }
    
    if (producto1.stock < producto2.stock) {
        console.log("El producto más stock es: "+producto2.nombre);
        console.log(producto1.nombre+"      "+producto2.nombre);
        console.log(producto1.stock + ", es menor: " + producto2.stock);
    }
    if (producto1.stock == producto2.stock) {
        console.log("Productos stock iguales es: "+producto2.nombre+" "+producto1.nombre);
        console.log(producto1.nombre+"      "+producto2.nombre);
        console.log(producto1.stock + ", es igual: " + producto2.stock);
    }
}