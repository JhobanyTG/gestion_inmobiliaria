const express = require('express');
const router = express.Router();
const proyectoDocumentacionController = require('../controllers/proyecto_documentacion_controller');

router
    .get('/', proyectoDocumentacionController.get)
    .get('/:id', proyectoDocumentacionController.getById)
    .post('/', proyectoDocumentacionController.create)
    .put('/:id', proyectoDocumentacionController.update)
    .delete('/:id', proyectoDocumentacionController._delete);

module.exports = router;