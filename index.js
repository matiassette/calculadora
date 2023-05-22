const argv = require ('process').argv;                  

const operacion = argv[2];
const numeroA = +argv[3];
const numeroB = +argv[4];

const sumar = function(a,b){
    return a + b
}

const restar = function(a,b){
    return a - b
}
const multiplicar = function(a,b){
    return a * b
}
const dividir = function(a,b){
    return a / b
}
const potencia = function (a,b){
    return a ** b
}
if(operacion === "sumar"){
    console.log(sumar(numeroA,numeroB));
}else if(operacion === "restar"){
    console.log(restar(numeroA,numeroB));
}else if(operacion === "multiplicar"){
    console.log(multiplicar(numeroA,numeroB));
}else if(operacion === "dividir"){
    console.log(dividir(numeroA,numeroB));
}else if(operacion === "potencia"){
    console.log(potencia(numeroA,numeroB));
}else{
    console.log("operacion desconocida");
}