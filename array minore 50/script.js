// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

let myarray = [];
let sommanumuser = 0;

do {
     sommanumuser = 0;
     
    let numerouser = parseInt(prompt("Scrivi un numero"));
    myarray.push(numerouser);

    for (let i = 0; i <myarray.length; i++){
        sommanumuser += myarray[i];
    }

} while (sommanumuser<50);

console.log(myarray)



     // const myarray = [];
     // let sommanumuser = 0;
     
     // do {
     
     //     let numerouser = parseInt(prompt("Scrivi un numero"));
     //     myarray.push(numerouser);
     //     sommanumuser  += numerouser
     
     // } while (sommanumuser<50);
     
     // console.log(myarray)
     
     //