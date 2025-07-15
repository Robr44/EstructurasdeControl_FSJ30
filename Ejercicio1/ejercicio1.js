/*  
    Crear una función que en base a la edad que ingresó el usuario, devolver un
    mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.
*/
// Funcion para verificar la edad ingresada
function confirmarEdad(edad){
    // Variable con una condicion del operador ternario que verifica " SI " la edad corresponde a una 
    // Persona mayor o menor de edad
    let mesaje = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";
    console.log(mesaje) // Muestra el mensaje con el resultado
}
// LLamar a la funcion confirmarEdad y asignarle datos 
confirmarEdad(20);
confirmarEdad(17); 