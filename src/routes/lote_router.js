const express = require('express');
const router = express.Router();
const loteController = require('../controllers/lote_controller');

router
    .get('/', loteController.get)
    .get('/:id', loteController.getById)
    .post('/', loteController.create)
    .put('/:id', loteController.update)
    .delete('/:id', loteController._delete);

module.exports = router;