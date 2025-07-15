/*
    Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:  
    - La cantidad de valores negativos ingresados. 
    - La cantidad de valores positivos ingresados. 
    - La cantidad de múltiplos de 15. 
    - El valor acumulado de los números ingresados que son pares.
*/
// Funcion encargada de contar los números asignados
function contarNumeros() {
    // Variable que contiene 10 números en su interior
    let numeros = [10, 9, -8, 7, 6, -5, 4, -3, 2, 15];
    // Variables para obtener los datos solicitados 
    let negativos = 0;
    let positivos = 0;
    let multiplosDeQuince = 0;
    let sumaNumerosPares = 0;
    // Estructura de control encargada de contar los números de la variable "numero"
    for(let i = 0; i < numeros.length; i++) {
        let valor = numeros[i];
        // Condicion que compara si los numeros ingresados son menores a 0
        if (valor < 0) {
            negativos++; // Si encuentra números menores a cero o números negativos este aumenta en 1
        } 
        // Si los numeros ingresados son mayores a 0
        else if (valor > 0) {
            positivos++; // Si encuentra numeros positivos aumenta en 1
        }
        // Condicion que busca si en los numeros proporcionados contienen multiplos de 15
        if (valor % 15 === 0) {
            multiplosDeQuince++; // Si encuentra aumenta en 1
        }
        // Condicion que busca si existen números pares
        if (valor % 2 === 0) {
            sumaNumerosPares += valor; // Si encuentra este suma todos los números pares (Positivos y negativos)
        }
    }
    // Mostrar los Números ingresados, Total números negativos, positivos, multiplos de 15 y la suma de
    // los numeros pares
    console.log("Números ingresados: " + numeros.join(", "));
    console.log("Total números negativos: " + negativos);
    console.log("Total números positivos: " + positivos);
    console.log("Total múltiplos de 15: " + multiplosDeQuince);
    console.log("Suma de números pares: " + sumaNumerosPares);
}
// LLamada a la funcion contarNumeros
contarNumeros();

