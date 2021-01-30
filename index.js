//              Todo se devuelve por Consola


let solicitar = (materia,promedio,asistencia,trabajos)=>{

    // LO NESCESARIO PAR APROBAR UNA MATERIA: Promedio 7/10. Asistencia 90% de 30. Trabajos 75% de 10


    if(promedio >= 7 && asistencia >= 27 && trabajos >= 7.5){
        console.groupCollapsed(`%cLa materia de ${materia} esta Aprobada.`,"background: green; padding:10px 50px");
        if(promedio >= 7){
            console.log(`%c El promedio esta aprobado con: ${promedio}`, "color: green;");
        }else{
            console.log(`%c El promedio esta desaprobado con: ${promedio}`, "color: red;");
        }
        if(asistencia >= 27){
            console.log(`%c La asistencia esta aprobado con: ${asistencia}`, "color: green;");
        }else{
            console.log(`%c La asistencia esta desaprobado con: ${asistencia}`, "color: red;");
        }
        if(trabajos >= 7.5){
            console.log(`%c Los trabajos estan aprobados con: ${trabajos}`, "color: green;");
        }else{
            console.log(`%c Los trabajos estan desaprobados con: ${trabajos}`, "color: red;");
        }
        console.groupEnd();
        
    }else{
        console.groupCollapsed(`%cLa materia de ${materia} esta Desaprobada.`,"background: red; padding:10px 50px");
        if(promedio >= 7){
            console.log(`%c El promedio esta aprobado con: ${promedio}`, "color: green;");
        }else{
            console.log(`%c El promedio esta desaprobado con: ${promedio}`, "color: red;");
        }
        if(asistencia >= 27){
            console.log(`%c La asistencia esta aprobado con: ${asistencia}`, "color: green;");
        }else{
            console.log(`%c La asistencia esta desaprobado con: ${asistencia}`, "color: red;");
        }
        if(trabajos >= 7.5){
            console.log(`%c Los trabajos estan aprobados con: ${trabajos}`, "color: green;");
        }else{
            console.log(`%c Los trabajos estan desaprobados con: ${trabajos}`, "color: red;");
        }
        console.groupEnd();
        
    }


}

//      Algunos ejemplos de prueba:

    /*  
        solicitar("futbol",9,30,8);
        solicitar("arte",3,21,10);
        solicitar("matematica",9,29,5);
        solicitar("quimica",7,27,8);
        solicitar("Ingles",10,30,10);
        solicitar("Teatro",7,21,8);
    */