const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/login', (request, response) => {
    response.render('login');
});

router.post('/login', (request, response) => {
    const password = request.body.password;
    const confirmar = request.body.confirmar;
    console.log("Datos recibidos:", { password, confirmar });
    if (password == confirmar) {
        fs.appendFileSync('datos_recibidos.txt', `Intento de login con password: ${password}\n`);
        response.redirect('/labpagina');
    }else{
        response.send('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
    }
});
module.exports = router;