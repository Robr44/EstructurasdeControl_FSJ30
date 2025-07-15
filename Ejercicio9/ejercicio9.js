/*  
    Crear programa donde se introduce una temperatura en Celsius y salga el resultado en 
    Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente: 
    - Si ºF está entre 14 y 32, sale la frase “Temperatura baja” 
    - Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada” 
    - Si ºF está entre 68 y 96, sale la frase “Temperatura alta” 
    - Si no está entre ningún caso anterior la frase “Temperatura desconocida”
*/
// Funcion para convertir de °C a Fahrenheit
function convertirFahrenheit(celsius){
    // Variable que contienen la operacion de conversion
    let fahrenheit = celsius * (9/5) + 32;
    // Condicional que compara si fahrenheit es mayor o igual a 14 y menor o igual a 32
    if(fahrenheit >= 14 && fahrenheit <= 32){
        // Muestra los °C convertidos a Fahreheit y mensaje de temperatura baja
        console.log(celsius + " °C es igual a " + fahrenheit +" Fahrenheit = Temperatura Baja.")
    }
    // si fahrenheit es mayor a 32 y menor o igual a 68
    else if(fahrenheit > 32 && fahrenheit <= 68){
        // Muestra los °C convertidos a Fahreheit y mensaje de temperatura adecuada
        console.log(celsius + " °C es igual a " + fahrenheit +" Fahrenheit = Temperatura Adecuada.")
    }
    // si fahrenheit es mayor a 68 y menor o igual a 96
    else if(fahrenheit > 68 && fahrenheit <= 96){
        // Muestra los °C convertidos a Fahreheit y mensaje de temperatura alta
        console.log(celsius + " °C es igual a " + fahrenheit +" Fahrenheit = Temperatura alta.")
    }
    else{
        // Si °C sale de los rangos especificados muestra mensaje de temperatura desconocida
        console.log(celsius + " °C ¡¡Temperatura desconocida!!")
    }
}
// Llamada de funcion y asignarle algunos °C
convertirFahrenheit(0);
convertirFahrenheit(10);
convertirFahrenheit(25);
convertirFahrenheit(40);