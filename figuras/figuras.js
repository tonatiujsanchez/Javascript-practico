const unidadDeMedida = 'cm';

// === === === Código del Cuadrado === === ===

const inputCuadrado = document.getElementById('inputCuadrado');
function calcularPerimetroCuadrado(){
    const value = inputCuadrado.value;
    const perimetro = perimetroCuadrado(value);
    alert('El perimetro de tu Cuadrado mide:' + perimetro);

}
function calcularAreaCuadrado(){
    const value = inputCuadrado.value;
    const area = areaCuadrado(value);
    alert('El área de tu Cuadrado mide: ' + area);
}

function perimetroCuadrado( ladoCuadrado ){
    return ladoCuadrado * 4;
}

function areaCuadrado( ladoCuadrado ){
    return ladoCuadrado * ladoCuadrado;
}







// === === === Código del Triángulo === === ===
const lado1Triangulo = document.getElementById('inputLado1Triangulo');
const lado2Triangulo = document.getElementById('inputLado2Triangulo');
const baseTriangulo = document.getElementById('inputBaseTriangulo');
const alturaTriangulo = document.getElementById('inputAlturaTriangulo');

function calcularPerimetroTriangulo(){
    const lado1 = Number(lado1Triangulo.value);
    const lado2 = Number(lado2Triangulo.value);
    const base = Number(baseTriangulo.value);
    
    const esIsosceles = esTrianguloIsosceles(lado1, lado2, base);
    const perimetroT = perimetroTriangulo(lado1, lado2, base);


    if( esIsosceles ){
        alert( 'El perimetro de tu triangulo es: '+ perimetroT + ' y es isoceles');
    }else{
        alert( 'El perimetro de tu triangulo es: '+ perimetroT + ' y NO es isoceles');
    }
}
function calcularAreaTriangulo(){
    const lado1 = Number(lado1Triangulo.value);
    const lado2 = Number(lado2Triangulo.value);
    const base = Number(baseTriangulo.value);
    const altura = Number(alturaTriangulo.value);

    const esIsosceles = esTrianguloIsosceles(lado1, lado2, base);
    const areaT = areaTriangulo(base, altura);

    if( esIsosceles ){
        alert( 'El área de tu triangulo es: '+ areaT + ' y es isoceles');
    }else{
        alert( 'El área de tu triangulo es: '+ areaT + ' y NO es isoceles');
    }


}

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return ( base * altura ) / 2;
}

function esTrianguloIsosceles(lado1, lado2, base){
    console.log(lado1, lado2, base);
    if( lado1 === lado2 && lado1 !== base && lado2 !== base   ){
        return true
    }else{
        return false;
    }
}



// === === === Código del Círculo === === ===

const radioCirculo = document.getElementById('inputCirculo');
function calcularPerimetroCirculo(){
    const radio = Number(radioCirculo.value);
    const perimetro = perimetroCirculo(radio);
    alert( 'El perimetro de tu circulo es: '+ perimetro );
}
function calcularAreaCirculo(){
    const radio = Number(radioCirculo.value);
    const area = areaCirculo(radio);
    alert( 'El área de tu circulo es: '+ area );
}

function diametroCirculo( radio ){
    return radio * 2;
}

const PI = Math.PI;
function perimetroCirculo( radio ){
    const diametro = diametroCirculo( radio );
    return diametro * PI;
}

function areaCirculo( radio ){
    return (radio * radio) * PI;
}


