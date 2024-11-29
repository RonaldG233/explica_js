let palabra= "1238    rona";
let regex=/^([0-9]{2,5}).+([a-z]{4,6})$/;


// function buscar(regex,palabra) {
//     if (palabra.includes(regex)) {
//         return true
//     }
//     return false
// }
// console.log(buscar(regex,palabra));

console.log(regex.test(palabra));
//  console.log(regex.exec(palabra));
 console.log(palabra.match(regex));


 //-------------------------------------------------------------------------------------------------------------------

 

