/*
    Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:  
    - La cantidad de valores negativos ingresados. 
    - La cantidad de valores positivos ingresados. 
    - La cantidad de múltiplos de 15. 
    - El valor acumulado de los números ingresados que son pares.
*/
function contarNumeros() {
    let numeros = [10, 9, -8, 7, 6, -5, 4, -3, 2, 15];

    let negativos = 0;
    let positivos = 0;
    let multiplosDeQuince = 0;
    let sumaNumerosPares = 0;

    for(let i = 0; i < numeros.length; i++) {
        let valor = numeros[i];

        if (valor < 0) {
            negativos++;
        } 
        else if (valor > 0) {
            positivos++;
        }

        if (valor % 15 === 0) {
            multiplosDeQuince++;
        }

        if (valor % 2 === 0) {
            sumaNumerosPares += valor;
        }
    }

    console.log("Números ingresados: " + numeros.join(", "));
    console.log("Total números negativos: " + negativos);
    console.log("Total números positivos: " + positivos);
    console.log("Total múltiplos de 15: " + multiplosDeQuince);
    console.log("Suma de números pares: " + sumaNumerosPares);
}
contarNumeros();

