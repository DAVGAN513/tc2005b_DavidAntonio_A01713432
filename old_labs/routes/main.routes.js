const express = require('express');
const router = express.Router();

router.get('/labpagina', (request, response) => {
    response.render('labpagina');
});

router.get('/preguntas', (request, response) =>{
    response.render('preguntas');
});

router.get('/referencias',(request, response) =>{
    response.render('referencias');
});

module.exports = router;