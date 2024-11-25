// let n=8;
// let cont=1;

// while (cont<=n) {
//     console.log(cont);
//     cont++
    
// }


// do {
//     console.log("?");
// } while (false);





// let n=2;

// for (let i=0;i<20;i++){
//     console.log(n);
//     n+=2;

// }



// let n=2;

// for (let i=2;i<20;i+n){
//     console.log(i);
    

// }


//------------------------------NUMEROS PRIMOS--------------------------------------



// let cont_num=0;
// for(let i=2;cont_num<10;i++){
//     let contador=0;
//     let numero=1;
//     while (numero<=i) {
//         if ((i%numero)==0) {
//             contador++;
//         }
//         numero++;
//     }
//     if (contador==2) {
//         console.log(i);
//         cont_num++;
//     }
// }

//------------------------------------------------------------------------------------------
// let numero=2;
// let cantidadPrimsos=0;
// let cont=0;
// while (cantidadPrimos<=10) {
//     for (let i=0; i<=numero; i++){
//         cont++;
//     }
//     if (cont<=2) {
//         console.log(numero);
//         cantidadPrimos++;
//     }
// }
// -------------------------------------------------------------------------------------------------


// break: continue


// for (let i=0; i<10; i++){
//     if (i===4) {
//         continue;
//     }

//     console.log(`Item ${i}`);
// }

//----------------------------------------------------------------------------------------------------

//DESTRUCTURACION


// const numeros=[1,2,3,4];
// let a=numeros

const persona ={
    nombre:"Ronald Alejandro",
    apellido:"gallo castellanos",
    edad:17,

};

const {nombre, apellido, edad}=persona;
console.log(nombre,apellido,edad);

  
  


  