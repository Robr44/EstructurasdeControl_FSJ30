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
// Funcion para determinar el aumento en el salario de los trabajadores
function aumentoSalario(nombre, salario, categoria) {
    // Variable aumento iniciada en "0"
    let aumento = 0;
    // Estructura de control Switch encargada de realizar la debida multiplicacion del salario
    // por el porcentaje de aumento de acuerdo a su categoria 
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
     // Mostrar los datos del trabajador, Nombre, Salario, Categoria, Aumento y nuevo sueldo
    console.log("Nombre: " + nombre );
    console.log("Salario: $ " + salario.toFixed(2));
    console.log("Categoría: " + categoria);
    console.log("Aumento: $ " + aumento.toFixed(2));
    console.log("El nuevo sueldo es de: $ " + (salario+aumento).toFixed(2) + "\n")
}
// LLamada a la funcion aumentoSalario asignandole datos de empleados
aumentoSalario("Roberto Mangandi", 600, "A");
aumentoSalario("Carlos Mártinez", 600, "B");
aumentoSalario("Sergio Arías", 600, "C");
aumentoSalario("Marlon Wayans", 600, "D");