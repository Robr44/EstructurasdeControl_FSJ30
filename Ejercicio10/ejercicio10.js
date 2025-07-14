/*
    Se cuenta con la siguiente información:  
    - Las edades de 5 estudiantes del turno mañana.  
    - Las edades de 6 estudiantes del turno tarde.  
    - Las edades de 11 estudiantes del turno noche.  
    Nota: Las edades de cada estudiante se deberán ingresar por la web.  
    Lo que queremos devolver: 
    - Obtener el promedio de las edades de cada turno (tres promedios). 
    - Imprimir dichos promedios (promedio de cada turno). 
    - Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un 
    promedio de edades mayor.
*/
function promedioEdades(){
    let turnoMañana = [18, 19, 18, 20, 21]
    let turnoTarde = [20, 21, 19, 20, 22, 23]
    let turnoNoche = [24, 23, 22, 25, 20, 22, 28, 26, 25, 20, 21]

    let proTurnoMañana = turnoMañana.reduce((suma, edad) => suma + edad, 0) / turnoMañana.length;
    console.log("Promedio de edades en el turno de la mañana: "  + proTurnoMañana.toFixed(2));

    let proTurnoTarde = turnoTarde.reduce((suma, edad) => suma + edad, 0) / turnoTarde.length;
    console.log("Promedio de edades en el turno de la tarde: " + proTurnoTarde.toFixed(2));

    let proTurnoNoche = turnoNoche.reduce((suma, edad) => suma + edad, 0) / turnoNoche.length;
    console.log("Promedio de edades en el turno de la noche: " + proTurnoNoche.toFixed(2));

    if(proTurnoMañana > proTurnoTarde && proTurnoMañana > proTurnoNoche){
        console.log("El promedio mayor de edades se encuentra en el turno de la mañana con: " + proTurnoMañana.toFixed(2));
    }
    else if(proTurnoTarde > proTurnoMañana && proTurnoTarde > proTurnoNoche){
        console.log("El promedio mayor de edades se encuentra en el turno de la tarde con: " + proTurnoTarde.toFixed(2));
    }
    else if(proTurnoNoche > proTurnoMañana && proTurnoNoche > proTurnoTarde){
        console.log("El promedio mayor de edades se encuentra en el turno de la noche con: " + proTurnoNoche.toFixed(2));
    }
}
promedioEdades();
