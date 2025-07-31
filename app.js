// Importo express, ne chiamo la funzione, salvo il valore nella variabile app e definisco la port '3000'
const express = require('express');
const app = express();
const port = 3000;
// Definisco rotta entry point di 'app' e restituisco in json il messaggio indicato in consegna
app.get('/', (req, res) => {
	res.send("Server del mio blog")
});
// Faccio in modo che app rimanga in ascolto sulla porta definita
app.listen(port, () => {
	console.log(`Sto ascoltando sulla porta ${port}...`)
})