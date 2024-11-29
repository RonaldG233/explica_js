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

// const persona ={
//     nombre:"Ronald Alejandro",
//     apellido:"gallo castellanos",
//     edad:17,

// };

// const {nombre, apellido, edad}=persona;
// console.log(nombre,apellido,edad);
//-----------------------------------------------------------------------------------------------------
  
  //parametros----------------------------------------------------------------------------


  //   function suma(a,b, ...c) {
//     let resultado =0;
//     console.log(typeof a);
//     console.log(typeof b);
//     console.log(typeof c);
//     for (let i = 0; i < c.length; i++) {
//         if (typeof(c[i])==="number") resultado+=c[i] 
        
//     }
//     if (typeof (a)=== "number")resultado+=a
//     if (typeof (b)=== "number")resultado+=b 
//     return resultado;
//     // return a+b+c;
//   }

//   let resultado=suma("dos",9,21,1,5,"cuatro",8,9);
//   console.log(resultado);

//----------OPERADOR SPREAD-------------------------------------------------------------------------------------------------

// const arrayA=[1,2,3];
// const arrayB=["a","b","c"];

// const arrayC=arrayA+ arrayB;
// const arrayC=arrayA.concat(arrayB);
// const arrayC=[...arrayA, ...arrayB];

// console.log(arrayC);    

//-----------------------------------------------------------------------------------------------------------------
  
// class Persona {
//      constructor(nombreA,apellidoA,edadA){
//         this.nombre=nombreA;
//         this.apellido=apellidoA;
//         this.edad=edadA;
//      }
//      //metodos
//      Comer(){
//         console.log(`${this.nombre} esta comiendo empanada`);
        
//      }
// }

// class Aprendiz extends Persona {
    
// }

// const Ronald= new Aprendiz("Ronald","Gallo",17);

// const edwin= new Aprendiz("edwin","villabona",18);
// Ronald.Comer();
// edwin.Comer();
  
//---------------------------------------------------------------



  