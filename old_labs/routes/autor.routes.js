const express = require('express');
const router = express.Router();
const autorController = requiere('../controller/autor.controller.js');

router.get('/login', autorController.getLogin);
router.post('/login', autorController.postLogin);
router.get('/preguntas', autorController.getPreguntas);
router.get('/referencias', autorController.getReferencias);

module.exports = router;