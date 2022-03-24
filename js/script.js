//Numero di chilometri
let chilometri = parseInt(prompt('Quanti chilometri deve percorrere?'));
console.log(chilometri);

//Età del passeggero
let userAge = parseInt(prompt('Quanti anni ha?'));
console.log(userAge);

//Prezzo intero del biglietto 
let fullPrice = (chilometri * 0.21);

//Prezzo scontato
if (userAge < 18){
    let under18 = (fullPrice - ((fullPrice * 20) / 100));
    console.log(under18.toFixed(2) + '€');
}
else if(userAge > 65){
    let over65 = (fullPrice - ((fullPrice * 40) / 100));
    console.log(over65.toFixed(2) + '€');
}
else{
    console.log(fullPrice + '€');
}