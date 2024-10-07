const express = require('express');
const router = express.Router();
const referenciaController = require('../controllers/referencia_controller');

router
    .get('/', referenciaController.get)
    .get('/:id', referenciaController.getById)
    .post('/', referenciaController.create)
    .put('/:id', referenciaController.update)
    .delete('/:id', referenciaController._delete);

module.exports = router;