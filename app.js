const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'old_labs', 'views'));

app.use(express.static(path.join(__dirname, 'old_labs', 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

const rutasAutenticacion = require('./old_labs/routes/autor.routes');
const rutasMain = require('./old_labs/routes/main.routes');

app.use('/autor', rutasAutenticacion);
app.use('/', rutasMain);

app.use((request, response) => {
    response.status(404).send('404 página no encontrada');
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});