const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyecto_controller');

router
    .get('/', proyectoController.get)
    .get('/:id', proyectoController.getById)
    .post('/', proyectoController.create)
    .put('/:id', proyectoController.update)
    .delete('/:id', proyectoController._delete);

module.exports = router;