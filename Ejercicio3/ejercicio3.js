/*  
    Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. 
    Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y 
    aumento. Deberá demostrar los datos del empleado y el aumento salarial. 
    CATEGORIA      AUMENTO
        A           15%
        B           30%
        C           10%
        D           20%
*/
function aumentoSalario(nombre, salario, categoria) {
    
    let aumento = 0;
     switch (categoria) {
        case "A":
            aumento = salario * 0.15;
            break;
        case "B":
            aumento = salario * 0.30;
            break;
        case "C":
            aumento = salario * 0.10;
            break;
        case "D":
            aumento = salario * 0.20;
            break;
     }
    console.log("Nombre: " + nombre );
    console.log("Salario: $ " + salario.toFixed(2));
    console.log("Categoría: " + categoria);
    console.log("Aumento: $ " + aumento.toFixed(2));
    console.log("El nuevo sueldo es de: $ " + (salario+aumento).toFixed(2) + "\n")
}
aumentoSalario("Roberto Mangandi", 600, "A");
aumentoSalario("Carlos Mártinez", 600, "B");
aumentoSalario("Sergio Arías", 600, "C");
aumentoSalario("Marlon Wayans", 600, "D");