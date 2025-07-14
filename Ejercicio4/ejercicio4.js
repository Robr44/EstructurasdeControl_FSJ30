/* 
    Crear una función que en base a 2 números enteros que ingrese el usuario, 
    calcular cual número es el mayor y devolverlo. 
*/
function numeroMayor(numer1, numer2){
    if(numer1 > numer2){
        console.log("El número mayor es: " + numer1);
    }
    else{
        console.log("El número mayor es: "+ numer2);
    }
}
numeroMayor(55, 60)