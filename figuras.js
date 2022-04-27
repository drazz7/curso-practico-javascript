// Codigo del Cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " centimetros");

function perimetroCuadrado(lado){
    return lado * 4;
} 
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " centimetros");

function areaCuadrado(lado){
    return lado * lado;
} 
// console.log("El area del cuadrado es: " + areaCuadrado + " cm2");
console.groupEnd();

// Codigo del Triangulo

console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("Los lados del triangulo miden: " 
// + ladoTriangulo1 + " cm, " 
// + ladoTriangulo2 + " cm, " 
// + baseTriangulo + " cm."
// );

// const alturaTriangulo = 5.5;
// console.log("la altura del triangulo mide: " + alturaTriangulo + " centimetros");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + " centimetros");

function areaTriangulo (base, altura){
    return (base * altura) / 2;
}
// console.log("El area del triangulo es: " + areaTriangulo + " cm2");

function alturaIsosceles(lado1, lado2, base){
    if(lado1 === lado2){
        return Math.sqrt((lado1**2)-(base**2/4));
    }
    else {
        return 0;
    }
}
console.groupEnd();

// Codigo del Circulo
console.group("Circulos");

// Radio
// const radioCirculo = 4;
// console.log("el radio del circulo mide: " + radioCirculo + " centimetros");
// Diametro
function diametroCirculo(radio){
    return radio * 2;
}
// console.log("el diametro del circulo mide: " + diametroCirculo + " centimetros");

// PI
// const PI = Math.PI;
// console.log("PI es: " + PI + " radianes");

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
} 
// console.log("el perimetro del circulo mide: " + perimetroCirculo + " centimetros");

// Area
function areaCirculo(radio){
    return (radio * radio) * Math.PI;
} 
// console.log("el area del circulo mide: " + areaCirculo + " cm2");

console.groupEnd();

// Aqui interactuamos con HTML
// Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTrianguloLado1");
    const input2 = document.getElementById("InputTrianguloLado2");
    const input3 = document.getElementById("InputTrianguloBase");

    var lado1 = Number(input1.value);
    var lado2 = Number(input2.value);
    var base = Number(input3.value);
   
    alert(perimetroTriangulo(lado1, lado2, base));
}

function calcularAreaTriangulo(){
    
    const input1 = document.getElementById("InputTrianguloBase");
    const input2 = document.getElementById("InputTrianguloAltura");

    alert(areaTriangulo(input1.value, input2.value));
}

function calcularAlturaIsosceles(){

    const input1 = document.getElementById("InputTrianguloLado1");
    const input2 = document.getElementById("InputTrianguloLado2");
    const input3 = document.getElementById("InputTrianguloBase");

    var lado1 = Number(input1.value);
    var lado2 = Number(input2.value);
    var base = Number(input3.value);

    alert(alturaIsosceles(lado1, lado2, base));
}

// Circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    alert(perimetroCirculo(input.value));
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    alert(areaCirculo(input.value));
}