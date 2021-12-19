
const precioOriginal = 3000;
const DescuentoEnPorcentaje = 12;
let descuento = 0;

const cupones = [
    {
        titulo: 'Hola_mundo',
        porcentaje: 50
    },
    {
        titulo: 'vip_30',
        porcentaje: 30
    },
    {
        titulo: 'navidad40',
        porcentaje: 50
    }
];

function obtenerValorDelCupon(){

    let cuponaPrompt = prompt('Ingrese el cupón'); 

    let cupon = cupones.filter( ( cupon )=> cupon.titulo === cuponaPrompt)

    if( cupon.length > 0 ){
        console.log( cupon[0] );
        const inputPrecio = document.getElementById('precioTotal');
        const precio = Number(inputPrecio.value);

        const cuponName = cupon[0].titulo;
        const precioCupon = precioConDescuanto( precio, cupon[0].porcentaje );
        console.log( { cuponName, precioCupon } );
        agregarAlHTML( precio, 0, { cuponName, precioCupon } );


    }else{
        console.log('Cupón NO VALIDO');
        alert('Cupón NO VALIDO');
    }

}






function precioConDescuanto( precioOriginal, DescuentoEnPorcentaje ){

    descuento = ( precioOriginal * DescuentoEnPorcentaje ) / 100;
    const precioAPagar = precioOriginal - descuento;

    return precioAPagar;
}

console.log('Precio regular:', precioOriginal );
console.log(
    'Pagas solo: ',
    precioConDescuanto(precioOriginal, DescuentoEnPorcentaje)
);
console.log('Te ahorras: ',descuento);



function obtenerPrecioConDescuento(){
    const inputPrecio = document.getElementById('precioTotal');
    const inputDescuento = document.getElementById('descuentoPorcentaje');

    const precio = Number(inputPrecio.value);
    const descuento = Number(inputDescuento.value);

    const precioConDescuento = precioConDescuanto( precio, descuento );

    agregarAlHTML( precio, precioConDescuento );
}


function agregarAlHTML( precio, resultado, resultadoCupon ){
    const parrafoResultado = document.getElementById('resultadoPrecioConDescuento');
    const parrafoPrecioRegular = document.getElementById('precioRegular');
    const parrafoResultadoCupon = document.getElementById('resultadoCupon');

    // parrafoPrecioRegular.innerText = `Precio regular: $${precio}`;
    
    console.log(resultadoCupon);

    if( resultadoCupon ){
        parrafoResultado.innerHTML = ``;
        parrafoResultadoCupon.innerHTML = `<p>¡Cupón ${ resultadoCupon.cuponName } Aplicado !</p><p>El precio con descuento es: $${ resultadoCupon.precioCupon }</p>`;
    }else{
        parrafoResultado.innerHTML = `<span>El precio con descuento es: $${resultado}</span>`;
        parrafoResultadoCupon.innerHTML = ``;
    }
    
}