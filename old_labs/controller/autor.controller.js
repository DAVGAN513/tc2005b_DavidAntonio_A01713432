const Usuario = require('../models/usuario.model.js');

exports.getLogin = (request, response) =>{
    response.render('login', {titulo: 'Login'});
};

exports.postLogin = (request, response) => {
    const password = request.body.password;
    const confirmar = request.body.confirmar;
    if(password == confirmar){
        Usuario.guardar(password);
        response.render('labpagina', {titulo: 'Pagina Principal', lista_intentos: Usuario.fetchAll()});
    }else{
        response.send('Las contraseñas no coinciden <a href="/autor/login">Volver a intentar</a>');
    }
};

exports.getPreguntas = (request, response) => {
    response.render('preguntas', {titulo: 'Preguntas'});
};

exports.getReferencias = (request, response) => {
    response.render('referencias', {titulo: 'Referencias'});
};