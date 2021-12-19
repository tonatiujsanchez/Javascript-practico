const lista = [
    1, 2, 3, 4, 1, 2, 2, 3, 4, 2, 4, 3, 2, 1, 1, 3, 2
];

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
const moda = listaArray[listaArray.length - 1 ];
console.log(lista);
console.log( listaCount );
console.log( listaArray );
console.log( 'Moda:', moda );