/*
    Crear una Función para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente:  
    Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el 
    descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino 
    es Puerto el Triunfo el descuento será del 15%.
*/
function descuentoViaje(destino){
    let descuento;
    if(destino == "Ciudad de Palma" || destino == "La Costa del Sol"){
        descuento = "5%";
    }
    else if(destino == "Panchimalco"){
        descuento = "10%";
    }
    else if("Puerto el Triunfo"){
        descuento = "15%"
    }
    console.log("Descuento aplicado para " + destino + " es del: " + descuento)
}
descuentoViaje("Ciudad de Palma");
descuentoViaje("La Costa del Sol");
descuentoViaje("Panchimalco")
descuentoViaje("Puerto el Triunfo")