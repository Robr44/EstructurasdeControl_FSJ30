/*  
    Crear una función que en base a la edad que ingresó el usuario, devolver un
    mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.
*/
function confirmarEdad(edad){
    let mesaje = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";
    console.log(mesaje)
}
confirmarEdad(20);
confirmarEdad(17);