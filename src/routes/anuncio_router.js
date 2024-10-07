const express = require('express');
const router = express.Router();
const anuncioController = require('../controllers/anuncio_controller');

router
    .get('/', anuncioController.get)
    .get('/:id', anuncioController.getById)
    .post('/', anuncioController.create)
    .put('/:id', anuncioController.update)
    .delete('/:id', anuncioController._delete);

module.exports = router;