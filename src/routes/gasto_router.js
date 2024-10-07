const express = require('express');
const router = express.Router();
const gastoController = require('../controllers/gasto_controller');

router
    .get('/', gastoController.get)
    .get('/:id', gastoController.getById)
    .post('/', gastoController.create)
    .put('/:id', gastoController.update)
    .delete('/:id', gastoController._delete);

module.exports = router;