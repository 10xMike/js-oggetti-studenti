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

studenti.push({nome: nomeUtente, cognome: cognomeUtente, age: etàUtente});

for (var key in studenti) {
        const element = studenti[key];
        console.log(element.nome, element.cognome, element.age);
}

// Considerazioni e possibili soluzioni

/* function pushList(){
   return document.getElementById('tutti').innerHTML = ;
} */
/*  for (var key in datiUtente) {
    console.log(datiUtente);
    studenti.push(datiUtente);
} */
/* for (var i = 0; i < datiUtente.length; i++) {
    var listaFinale;
    listaFinale += datiUtente[i] + " ";
}  */
/*  console.log(studenti.indexOf(datiUtente.value)); */