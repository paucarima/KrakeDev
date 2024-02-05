  
calcularTasaInteres=function(ingresoAnual){
    ingresoAnual=recuperarFloat("txtIngreso");      
   //PONGO LA LIMITACION 0 PARA NO ADMITIR NUMEROS negativos
    let tasa=0;
    if (ingresoAnual<300000 &&  ingresoAnual>0) {
        tasa="16%";
        mostrarIngreso("lblResultado1",tasa);

    }else if(ingresoAnual<500000 &&  ingresoAnual>=300000){
        tasa="15%";
        mostrarIngreso("lblResultado1",tasa);

    } else if(ingresoAnual<1000000 &&  ingresoAnual>=500000){
        tasa="14%";
        mostrarIngreso("lblResultado1",tasa);

    }else if(ingresoAnual<2000000 &&  ingresoAnual>=1000000){
        tasa="13%";
        mostrarIngreso("lblResultado1",tasa);

    }else if(ingresoAnual>=2000000){
        tasa="12%";
        mostrarIngreso("lblResultado1",tasa);

    }else {
        tasa="0%";
        mostrarIngreso("lblResultado1",tasa);

    }
    return tasa;
}

calcularCapacidadPago=function(ingresos,egresos,edad){
    ingresos=recuperarFloat("txtIngreso1");
    egresos=recuperarFloat("txtEgreso");  
    edad=recuperarInt("txtEdad");
    
    let capacidad;
    if(edad>50){ 
        capacidad=((ingresos-egresos)/0.3).toFixed(2);
        //si es mayor de 50 años
        mostrarIngreso("lblResultado2",capacidad);

        
    }else if(edad<=50){
        capacidad=((ingresos-egresos)/0.4).toFixed(2);
        mostrarIngreso("lblResultado2",capacidad);
        //si su capacidad es hasta 50 años
    }

    return capacidad;
}

calcularDescuento=function(precio,cantidad){
    precio=recuperarFloat("txtPrecio");
    cantidad=recuperarInt("txtCantidad");
    let descuento;
    let total=precio*cantidad;
    if(cantidad<3){
        descuento="No hay descuento";
        mostrarIngreso("lblResultado3",descuento);
        
    }else if(cantidad>=3 && cantidad<=5){
        descuento=(total-(total*0.02)).toFixed(2) + " USD a PAGAR";
        mostrarIngreso("lblResultado3",descuento);

    }else if(cantidad>=6 && cantidad<=11){
        descuento=(total-(total*0.03)).toFixed(2) + " USD a PAGAR";
        mostrarIngreso("lblResultado3",descuento);

    }if(cantidad>=12){
        descuento=(total-(total*0.04)).toFixed(2) + " USD a PAGAR";
        mostrarIngreso("lblResultado3",descuento);
    }
    return descuento;
}

determinarColesterolLDL=function(nivelColesterol){
    nivelColesterol=recuperarFloat("txtColesterol");
    let resultado;
    /*Menos de 100 mg/dl	Óptimo (lo mejor para su salud)
Entre 100 y 129 mg/dl	Casi óptimo
Entre 130 y 159 mg/dl	Límite superior del rango normal
Entre 160 y 189 mg/dl	Alto
190 mg/dl o más	Muy alto*/
    if (nivelColesterol<100) {
        resultado=nivelColesterol+"  mg/dl - OPTIMO (lo mejor para su salud).";    
    } else if (nivelColesterol>=100 && nivelColesterol<=129) {
        resultado=nivelColesterol+ " mg/dl - CASI OPTIMO.";
    } else if (nivelColesterol>=130 && nivelColesterol<=159) {
        resultado=nivelColesterol+ " mg/dL - LIMITE SUPERIOR DEL RANGO NORMAL.";
    } else if (nivelColesterol>=160 && nivelColesterol<=189) {
        resultado=nivelColesterol+ " mg/dL - ALTO.";
    } else if(nivelColesterol >=190){
        resultado=nivelColesterol+ " mg/dL - MUY ALTO.";
    }           
    mostrarIngreso("lblResultado4", resultado);
    return resultado;

}

validarClave=function(clave){
    clave=recuperarTexto("txtClave");
    let tamanio=clave.length;
  
    //Ingresa tu clave (debe tener al menos 8 o max 16 caracteres) :
    if (tamanio<8 || tamanio>16) {
        mostrarIngreso("lblResultado5", false);
        return false;
        
    } else {
        mostrarIngreso("lblResultado5", true);
        return true;
    }

} 

 //Determinar si la letra que recibe como parametros  una letra maysucula
esMayuscula=function(caracter){
   
    caracter=recuperarTexto("txtMayuscula");
    let codigoLetra=caracter.charCodeAt(0);
    if (codigoLetra >= 65 && codigoLetra <= 90) {
        mostrarIngreso("lblResultado6", true);
        return true;
    } else {
        mostrarIngreso("lblResultado6", false);
        return false;
    }
}

esMiniscula=function(caracter){
   
    caracter=recuperarTexto("txtMinuscula");
    let codigoLetra=caracter.charCodeAt(0);
    if (codigoLetra >= 97 && codigoLetra <= 122) {
        mostrarIngreso("lblResultado7", true);
        return true;
    } else {
        mostrarIngreso("lblResultado7", false);
        return false;
    }
}

//Determina si la letra que recibe como parametro es un digito

esDigito=function(caracter){
   
    caracter=recuperarTexto("txtDigito");
    let codigoLetra=caracter.charCodeAt(0);
    if (codigoLetra >= 48 && codigoLetra <= 57) {
        mostrarIngreso("lblResultado8", true);
        return true;
    } else {
        mostrarIngreso("lblResultado8", false);
        return false;
    }
} 

darPermiso=function(notaMatematica, notaFisica, notaGeometria){
    notaMatematica=recuperarFloat("txtNotaM");
    notaFisica=recuperarFloat("txtNotaF");
    notaGeometria=recuperarFloat("txtNotaG");
    if (notaFisica >90 || notaGeometria>90 ||  notaMatematica>90 ) {
       mostrarIngreso("lblResultado9",true);
       mostrarIngreso("lblResultado10","si puede salir");
       return true;  
        
    } else {
        mostrarIngreso("lblResultado9",false);
        mostrarIngreso("lblResultado10"," no puede salir");
        return false;  
    }

}

otorgarPermiso=function(notaMatematica, notaFisica, notaGeometria){
    notaMatematica=recuperarFloat("txtNotaM1");
    notaFisica=recuperarFloat("txtNotaF1");
    notaGeometria=recuperarFloat("txtNotaG1");
    if ((notaMatematica >90 || notaFisica>90) && notaGeometria>80) {
       mostrarIngreso("lblResultado11",true);
       mostrarIngreso("lblResultado12","si puede salir");
       return true;  
        
    } else {
        mostrarIngreso("lblResultado11",false);
        mostrarIngreso("lblResultado12"," no puede salir");
        return false;  
    }

}

//un padre condiciono el permiso de salida de su hijo, de manera que pueda 
//salir solamente si saca mas de 90 en matematica, 
//fisica o geometria y ademas si la nota de fisica es mayor a la de matematica 
dejarSalir=function(notaMatematica, notaFisica, notaGeometria){
    notaMatematica=recuperarFloat("txtNotaM2");
    notaFisica=recuperarFloat("txtNotaF2");
    notaGeometria=recuperarFloat("txtNotaG2");
    if ((notaMatematica >90 || notaFisica>90 || notaGeometria>90) && notaFisica>notaMatematica) {
       mostrarIngreso("lblResultado13",true);
       mostrarIngreso("lblResultado14","si puede salir");
       return true;  
        
    } else {
        mostrarIngreso("lblResultado13",false);
        mostrarIngreso("lblResultado14"," no puede salir");
        return false;  
    }

}

