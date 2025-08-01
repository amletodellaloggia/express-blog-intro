// Importo express, ne chiamo la funzione, salvo il valore nella variabile app e definisco la port '3000'
const express = require('express');
const app = express();
const port = 3000;
// Definisco il middleware per le img (file statici)
app.use(express.static(`public/`));

// Definisco rotta entry point di 'app' e restituisco in json il messaggio indicato in consegna
app.get('/', (req, res) => {
	res.send("Server del mio blog")
});
// Definisco la rotta per ottenere i post del blog
app.get('/bacheca', (req, res) =>{
	const posts = [
		{
			titolo: "Primo Post",
			contenuto: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			immagine: "public/img/1.jpg",
			tags: ['#lorem']
		{
			titolo: "Secondo Post",
			contenuto: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			immagine: "public/img/2.jpg",
			tags: ['#lorem', '#ipsum']
		},
		{
			titolo: "Terzo Post",
			contenuto: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			immagine: "public/img/3.jpg",
			tags: ['#lorem', '#ipsum', '#dolor']
		},
		{
			titolo: "Quarto Post",
			contenuto: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			immagine: "public/img/4.jpg",
			tags: ['#lorem', '#ipsum', '#dolor', '#sit']
		},
		{
			titolo: "Quinto Post",
			contenuto: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			immagine: "public/img/5.jpg",
			tags: ['#lorem', '#ipsum', '#dolor', '#sit', '#amet']
		}
	];
	res.json(posts);
})

// Faccio in modo che app rimanga in ascolto sulla porta definita
app.listen(port, () => {
	console.log(`Sto ascoltando sulla porta ${port}...`)
})