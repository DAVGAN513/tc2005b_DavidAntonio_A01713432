const express = require('express');
const router = express.Router();
const intentos = [];

router.get('/login', (request, response) =>{
    response.render('login',{titulo: 'Login'});
});

router.get('/labpagina', (request, response) =>{
    response.render('labpagina',{titulo: 'Pagina Principal', lista_intentos: intentos});
});

router.get('/preguntas', (request, response) =>{
    response.render('preguntas',{titulo: 'Preguntas'});
});

router.get('/referencias', (request, response) =>{
    response.render('referencias',{titulo: 'Referencias'});
});

router.post('/login', (request, response) =>{
    const password = request.body.password;
    const confirmar = request.body.confirmar;
    if(password == confirmar){
        intentos.push(password);
        response.render('labpagina',{titulo: 'Lab Pagina', lista_intentos: intentos});
    }else{
        response.send('Las contraseñas no coinciden');
    }
})

module.exports = router;