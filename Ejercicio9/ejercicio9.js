/*  
    Crear programa donde se introduce una temperatura en Celsius y salga el resultado en 
    Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente: 
    - Si ºF está entre 14 y 32, sale la frase “Temperatura baja” 
    - Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada” 
    - Si ºF está entre 68 y 96, sale la frase “Temperatura alta” 
    - Si no está entre ningún caso anterior la frase “Temperatura desconocida”
*/
function convertirFahrenheit(celsius){
    let fahrenheit = celsius * (9/5) + 32;
    if(fahrenheit >= 14 && fahrenheit <= 32){
        console.log(celsius + " °C es igual a " + fahrenheit +" Fahrenheit = Temperatura Baja.")
    }
    else if(fahrenheit > 32 && fahrenheit <= 68){
        console.log(celsius + " °C es igual a " + fahrenheit +" Fahrenheit = Temperatura Adecuada.")
    }
    else if(fahrenheit > 68 && fahrenheit <= 96){
        console.log(celsius + " °C es igual a " + fahrenheit +" Fahrenheit = Temperatura alta.")
    }
    else{
        console.log(celsius + " °C ¡¡Temperatura desconocida!!")
    }
}
convertirFahrenheit(0);
convertirFahrenheit(10);
convertirFahrenheit(25);
convertirFahrenheit(40);