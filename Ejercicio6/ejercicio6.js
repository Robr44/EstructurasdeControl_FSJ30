/*
    Crear una Función para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente:  
    Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el 
    descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino 
    es Puerto el Triunfo el descuento será del 15%.
*/
// Funcion encarcada de determinar el descuento para viajes turisticos
function descuentoViaje(destino){
    // Variable descuento
    let descuento;
    // Condicion si el destino del viaje es Ciudad de Palma Y si es La Costa del Sol
    if(destino == "Ciudad de Palma" || destino == "La Costa del Sol"){
        descuento = "5%"; // Su descuento será del 5%
    }
    // SI el destino es Panchimalco
    else if(destino == "Panchimalco"){
        descuento = "10%"; // Su descuento será del 10%
    }
    // Si es Puerto el Triunfo
    else if("Puerto el Triunfo"){
        descuento = "15%"; //El descuento será del 15%
    }
    // Mostrar el destino y el descuento aplicado al viaje turistico
    console.log("Descuento aplicado para " + destino + " es del: " + descuento)
}
// LLamada a la funcion descuentoViaje y asignarle un destino turistico
descuentoViaje("Ciudad de Palma");
descuentoViaje("La Costa del Sol");
descuentoViaje("Panchimalco")
descuentoViaje("Puerto el Triunfo")