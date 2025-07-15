/* 
    Crear una función que en base a 2 números enteros que ingrese el usuario, 
    calcular cual número es el mayor y devolverlo. 
*/
//Funcion para determinar cual es el número mayor entre dos números
function numeroMayor(numer1, numer2){
    // Condición IF que compara si el número 1 es mayor que el número 2
    if(numer1 > numer2){
        console.log("El número mayor es: " + numer1); // Mostrar número mayor
    }
    // Si la condición anterior no se cumple entonces
    else{
        console.log("El número mayor es: "+ numer2); // Mostrar número 2 como mayor
    }
}
// LLamar a la funcion numeroMayor y asignarle dos números distintos
numeroMayor(55, 60)