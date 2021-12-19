// Generamos un nuevo Array en donde alamacenamos solo los salarios.
const salariosCol = colombia.map( ( persona )=>{
    return persona.salary;
});

// Ordenar una lista: de menor a mayor, en este caso los salarios.
let salariosOrdenados = salariosCol.sort( (salarioA, salarioB ) => salarioA - salarioB  );


// Calcular la Mediana de una lista
function calcularMediana( lista ){

    const listaMitad = lista.length / 2;

    if( esPar( lista.length ) ){
        
        const valor1 = lista[listaMitad-1];
        const valor2 = lista[listaMitad ];

        const promedioMediana = ( valor1 + valor2 ) / 2;

        return promedioMediana;

    }else{
        const valor = Math.floor(listaMitad);
        return lista[ valor ];
    }

}

// Verificar si un numero es par
function esPar( numero ){
    return ( numero % 2 === 0 ) ? true : false;
}



// Ontener el top 10%
function obtenerTop10( salarios ){
    const spliceStart = ( salarios.length * 90 ) / 100;
    const spliceCount = salarios.length - spliceStart;
    
    const Top10 = salarios.splice( spliceStart, spliceCount );

    return Top10;
}

const salariosTop10 = obtenerTop10( salariosOrdenados );


const medianaSalariosGeneral = calcularMediana(salariosOrdenados );
const medianaSalariosTop10 = calcularMediana(salariosTop10 );

console.log('General:', medianaSalariosGeneral );
console.log('Top 10:', medianaSalariosTop10 );

