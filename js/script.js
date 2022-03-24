//Numero di chilometri
let chilometri = parseInt(prompt('Quanti chilometri deve percorrere?'));
console.log('Chilometri che il passeggero deve percorrere: ' + chilometri);

//Età del passeggero
let userAge = parseInt(prompt('Quanti anni ha?'));
console.log('Età del passeggero: ' + userAge);

//Prezzo intero del biglietto 
let fullPrice = (chilometri * 0.21);

//Prezzo scontato
if (userAge < 18){
    let under18 = (fullPrice - ((fullPrice * 20) / 100));
    console.log('Prezzo del biglietto scontato con la tariffa Under 18: ' + under18.toFixed(2) + '€');
}
else if(userAge > 65){
    let over65 = (fullPrice - ((fullPrice * 40) / 100));
    console.log('Prezzo del biglietto scontato con la tariffa Over 65: ' + over65.toFixed(2) + '€');
}
else{
    console.log('Prezzo intero del biglietto: ' + fullPrice + '€');
}