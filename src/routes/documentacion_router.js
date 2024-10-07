const express = require('express');
const router = express.Router();
const documentacionController = require('../controllers/documentacion_controller');

router
    .get('/', documentacionController.get)
    .get('/:id', documentacionController.getById)
    .post('/', documentacionController.create)
    .put('/:id', documentacionController.update)
    .delete('/:id', documentacionController._delete);

module.exports = router;