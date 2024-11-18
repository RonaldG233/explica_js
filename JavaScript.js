// varibles
var saludo="Muchachos";
let adso="2894667";
const DNI=1098072646;
const numero={};
console.log(saludo);
console.log(adso);
{
    let adso="victor";
}

console.clear();



// cadenas de texto 
let nombre="ronald";
let apellido="gallo";
console.log(nombre.length);
console.log(nombre[2]);
let completo=nombre + " " + apellido;
console.log(completo.toUpperCase());
// console.log(completo.includes(alejandro));
console.log(nombre.split(" "));
console.clear();

//--------------------------------------------------------------

let item1="item1";
let item2="item2";
let item3="item3";
let item4="item4";


let lista= `<ul>
<li>${item1}</li>
<li>${item2}</li>
<li>${item3}</li>
<li>${item4}</li>
</ul>`;

console.log(lista);
console.clear();

// numbers


// let entrada=prompt("ingrese un numero");
// let uno=1;
// let dos=new Number(2);
// let tres=3.5;
// console.log(dos);

// let flotante=7.1542;
// console.log(flotante);
// console.log(flotante.toFixed(1));
// console.log(tres);
// console.log(typeof 3);

// let nuevo=console.log(parseFloat(3));
// console.log(nuevo*3);
// console.log(entrada);
// alert(entrada);
// let respuesta=confirm("pueder seguir")
// console.log(typeof tres==="number");
// console.clear();

// funciones

// function nombre(parametro) {
//     return parametro ;
    
// }
// nombre();

// let esPrimo=function (numero) {
//     if (true) {
//         return true;

//     }else{
//         return false;
//     }
    
// }

// var esPrimo=function (numero) {
//     let conta=0;
//     for (let n =1; n <=numero; n++){
//         if ((numero%n)==0) {
//             conta++;
//         }
       
//     }
//     if (conta>2) {
//         return "el numero no es primo"
        
//     }else if (conta==2){
//         return "el numero es primo";
//     }
//     else{
//         return "el numero no es primo";
//     }

    
    
// }
// console.log(esPrimo(5));

// const anonimo=function (valor) {
//     console.log(valor);
// }
// let respuesta=anonima(25);
// console.log(respuesta);

function * nombre() {
    yield(1);
    yield(2);
    
}