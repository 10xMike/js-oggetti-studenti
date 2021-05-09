// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome, età
var studente = {
    nome: "Shauna",
    cognome: "Vayne",
    age: 24,
}
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto
for (var key in studente) {
    console.log(studente);
    document.getElementById('studente').innerHTML += [key] + ": " + studente[key] + "<br>";
}
// Creare un array di oggetti di studenti
var studenti = [
    {
        nome: "Gregory",
        cognome: "House",
        age: 61,
    },
    {
        nome: "Lisa",
        cognome: "Cuddy",
        age: 54,
    },
    {
        nome: "James",
        cognome: "Wilson",
        age: 52,
    },
    {
        nome: "Allison",
        cognome: "Cameron",
        age: 42,
    }
]
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome
for (var i = 0; i < studenti.length; i++) {
    document.getElementById('studenti').innerHTML += studenti[i].nome + " ";
    document.getElementById('studenti').innerHTML += studenti[i].cognome + "<br>";
}
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età
var nomeUtente = prompt('Inserisci il tuo nome');
var cognomeUtente = prompt('Inserisci il tuo cognome');
var etàUtente = Number(prompt("Inserisci la tua età"));

var datiUtente = {
    nome: nomeUtente,
    cognome: cognomeUtente,
    age: etàUtente,
}

for (var i = 0; i < studenti.length; i++) {
    if (datiUtente == true) {
        datiUtente.push(studenti);
    }
}
studenti = datiUtente;
console.log(studenti);

