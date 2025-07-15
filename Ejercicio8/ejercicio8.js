/*
    Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado 
    por el usuario.
*/
// Funcion encargada de mostrar una tabla de multiplicar
function tablaMultiplicar(tabla){
    // Estructura For que especifica que empezara con valor en 1
    // y sera menor o igual a 10 e ira aumentando en 1
    for(let i = 1; i <= 10; i++){
        console.log(tabla + " x " + i + " = " + (tabla * i));// Mostrar resultado de multiplicaciones
    }
}
// LLamada a la funcion tablaMultiplciar y asignarle un número ek cual sera la tabla de multiplciar 
// que deseemos
tablaMultiplicar(6);