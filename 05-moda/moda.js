const lista = [
    1, 2, 3, 4, 1, 2, 2, 3, 4, 2, 4, 3, 2, 1, 1, 3, 2
];



function calcularModa( lista ){
    const listaCount = {};
    lista.map(
        (numero) =>{
            if( listaCount[numero] ){
                listaCount[numero] += 1;
            }else{
                listaCount[numero] = 1;
            }
        }
    );
    
    const listaArray = Object.entries( listaCount ).sort( ( valorAnterior, nuevoValor )=> valorAnterior[1] - nuevoValor[1] );
     
    return listaArray[listaArray.length - 1 ];
}

const moda = calcularModa( lista );

console.log( 'Moda:', moda );