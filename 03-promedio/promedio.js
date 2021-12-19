const lista1 = [
    100,
    200,
    300,
    500
];

function calcularMediaAritmetica( lista ){

    // let sumaLista = 0;
    // lista.forEach(element => {
    //     sumaLista += element;
    // });

    let sumaLista = lista.reduce( ( valorAcomulado, valorActual ) => valorAcomulado + valorActual ); 
    console.log(sumaLista);

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

console.log(
    'Promedio: '+
    calcularMediaAritmetica( lista1 )
);