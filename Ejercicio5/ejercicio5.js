/*  
    Realizar una función para una tienda de coches en donde se deberá calcular: 
    Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el 
    coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE 
    el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se 
    aplicara en base a lo que selecciono el usuario.
*/
function descuentoVehiculo(vehiculo){
    let descuento;
    if(vehiculo == "Ford Fiesta"){
        descuento = "5%";
    }
    else if(vehiculo == "Ford Focus"){
        descuento = "10%";
    }
    else if(vehiculo == "Ford Escape"){
        descuento = "20%";
    }
    console.log("Descuento aplicado para el coche " + vehiculo + " es del: " + descuento);
}
descuentoVehiculo("Ford Fiesta");
descuentoVehiculo("Ford Focus");
descuentoVehiculo("Ford Escape");
