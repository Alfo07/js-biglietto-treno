//Nome del passeggero
let userName = prompt('Come si chiama il passeggero?');
document.getElementById('Name').innerHTML =  userName;
console.log('Il passeggero si chiama: ' + userName);

//Numero di chilometri
let chilometri = parseInt(prompt('Quanti chilometri deve percorrere?'));
document.getElementById('Km').innerHTML = 'Il passeggero deve percorrere: ' + chilometri + 'Km';
console.log('Chilometri che il passeggero deve percorrere: ' + chilometri);

//Età del passeggero
let userAge = parseInt(prompt('Quanti anni ha?'));
document.getElementById('Age').innerHTML = 'Il passeggero ha ' + userAge + ' anno/i';
console.log('Età del passeggero: ' + userAge);

//Prezzo intero del biglietto 
let fullPrice = (chilometri * 0.21);

//Prezzo scontato
if (userAge < 18){
    let under18 = (fullPrice - ((fullPrice * 20) / 100));
    document.getElementById('Prezzo').innerHTML = 'Prezzo del biglietto scontato con la tariffa Under 18: ' + under18.toFixed(2) + '€';
    console.log('Prezzo del biglietto scontato con la tariffa Under 18: ' + under18.toFixed(2) + '€');
}
else if(userAge > 65){
    let over65 = (fullPrice - ((fullPrice * 40) / 100));
    document.getElementById('Prezzo').innerHTML = 'Prezzo del biglietto scontato con la tariffa Over 65: ' + over65.toFixed(2) + '€'
    console.log('Prezzo del biglietto scontato con la tariffa Over 65: ' + over65.toFixed(2) + '€');
}
else{
    document.getElementById('Prezzo').innerHTML = 'Prezzo intero del biglietto: ' + fullPrice + '€'
    console.log('Prezzo intero del biglietto: ' + fullPrice + '€');
}