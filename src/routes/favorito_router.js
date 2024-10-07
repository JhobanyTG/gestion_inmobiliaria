const express = require('express');
const router = express.Router();
const favoritoController = require('../controllers/favorito_controller');

router
    .get('/', favoritoController.get)
    .get('/:id', favoritoController.getById)
    .post('/', favoritoController.create)
    .put('/:id', favoritoController.update)
    .delete('/:id', favoritoController._delete);

module.exports = router;