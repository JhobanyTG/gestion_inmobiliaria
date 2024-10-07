const express = require('express');
const router = express.Router();
const recursoController = require('../controllers/recurso_controller');

router
    .get('/', recursoController.get)
    .get('/:id', recursoController.getById)
    .post('/', recursoController.create)
    .put('/:id', recursoController.update)
    .delete('/:id', recursoController._delete);

module.exports = router;