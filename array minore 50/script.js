// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.


const myarray = [];



while ( myarray <= 50 ) {

let numerouser = parseInt(prompt("Scrivi un numero"));

if(myarray >= 50){
    let somma = numerouser + numerouser;

    myarray.push(numerouser);
} 


console.log(myarray);
}