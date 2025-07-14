/*
    Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado 
    por el usuario.
*/
function tablaMultiplicar(tabla){
    for(let i = 1; i <= 10; i++){
        console.log(tabla + " x " + i + " = " + (tabla * i));
    }
}
tablaMultiplicar(6);