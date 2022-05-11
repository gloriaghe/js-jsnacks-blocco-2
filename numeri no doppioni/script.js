// genera un array di 10 numeri casuali range 1 - 100, ma stavolta senza doppioni

const mioBottone = document.querySelector("button");
const ArrayHtml = document.querySelector("#array");

mioBottone.addEventListener("click",
    function(){
const myarray = [];



while (myarray.length < 10) {

    let randNum = Math.floor(Math.random()*100) +1; 
    
    if (!myarray.includes(randNum)){
        myarray.push(randNum);
    }
    
}

ArrayHtml.innerHTML = myarray;
console.log(myarray);
    })