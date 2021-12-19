const lista1 = [
    100,
    200,
    300,
    500,
    600,
    500,
    800,
    100
];

function calcularMediana( lista ){

    //Ordenar la lista utilizando en metodo sort
    lista = lista.sort( ( a, b )=> a - b );

    const mitadLista = lista.length / 2;
    const reciduoLista = mitadLista % 1;
    
    if( reciduoLista == 0 ){
        const valor1 = lista[mitadLista-1];
        const valor2 = lista[mitadLista ];
    
        const promedio = ( valor1 + valor2 ) / 2;
        return promedio;
    }else{
        let valor = Math.floor(mitadLista);
        return lista[valor];
    }
}
