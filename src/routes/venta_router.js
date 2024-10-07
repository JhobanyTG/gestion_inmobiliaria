const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/venta_controller');

router
    .get('/', ventaController.get)
    .get('/:id', ventaController.getById)
    .post('/', ventaController.create)
    .put('/:id', ventaController.update)
    .delete('/:id', ventaController._delete);

module.exports = router;