
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

    }else{
        console.log('Cupón NO VALIDO');
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


function agregarAlHTML( precio, resultado ){
    const parrafoResultado = document.getElementById('resultadoPrecioConDescuento');
    const parrafoPrecioRegular = document.getElementById('precioRegular');
    
    parrafoResultado.innerHTML = `<span>El precio con descuento es: $${resultado}</span>`;
    parrafoPrecioRegular.innerText = `Precio regular: $${precio}`;
}