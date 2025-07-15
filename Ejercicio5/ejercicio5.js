/*  
    Realizar una función para una tienda de coches en donde se deberá calcular: 
    Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el 
    coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE 
    el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se 
    aplicara en base a lo que selecciono el usuario.
*/
// Funcion encargada para determinar el descuento de vehiculo aplicada
function descuentoVehiculo(vehiculo){
    //Variable descuento
    let descuento;
    //Condicion que compara si el vehiculo ingresado es un Ford Fiesta
    if(vehiculo == "Ford Fiesta"){
        descuento = "5%"; // SI es asi entonces su descuento será del 5%
    }
    // Si el vehiculo es un Ford Focus
    else if(vehiculo == "Ford Focus"){
        descuento = "10%"; // Si es asi, entonces será del 10%
    }
    // SI es un Ford Focus 
    else if(vehiculo == "Ford Escape"){
        descuento = "20%"; // Si es asi, su descuento sera del 20%
    }
    // Mostrar el vehiculo y el descuento aplicado
    console.log("Descuento aplicado para el coche " + vehiculo + " es del: " + descuento);
}
// LLamada a la funcion descuentoVehiculo y asignar tipos de vehiculos
descuentoVehiculo("Ford Fiesta");
descuentoVehiculo("Ford Focus");
descuentoVehiculo("Ford Escape");
