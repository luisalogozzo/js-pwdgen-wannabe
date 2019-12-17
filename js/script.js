var NomeUtente = prompt('Come ti chiami?');
console.log(NomeUtente);

var CognomeUtente = prompt('Qual è il tuo cognome?');
console.log(CognomeUtente);

var ColorePreferito = prompt('Qual è il tuo colore preferito?');
console.log(ColorePreferito);

document.getElementById('nome').innerHTML = NomeUtente;

document.getElementById('pass').innerHTML = NomeUtente + CognomeUtente + ColorePreferito + '19';
