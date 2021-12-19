const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];


function obtenerPromedioPonderado( notes ){

    const notesWithCredits = notes.map( ( course )=>{
        return course.credit * course.note;
    });
    
    const totalNotesWithCredits = notesWithCredits.reduce( ( valorAcomulado, valorActual )=>{
        return valorAcomulado + valorActual;
    });
    
    let totalCredits = 0;
    notes.forEach( ( course )=>{
        totalCredits += course.credit;
    });
    
    return totalNotesWithCredits /  totalCredits;
}

const promedioPonderado = obtenerPromedioPonderado( notes );

console.log(promedioPonderado);