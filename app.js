const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'old_labs', 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'old_labs', 'views'));

app.get('/login', (request, response) => {
    response.render('login');
});

app.get('/pagina', (request, response) => {
    response.render('labpagina');
});

app.get('/', (request, response) => {
    response.redirect('/login');
});

app.use((request, response) => {
    response.status(404).send('404 página no encontrada');
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});