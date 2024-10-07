const express = require('express');
const router = express.Router();
const citaController = require('../controllers/cita_controller');

router
    .get('/', citaController.get)
    .get('/:id', citaController.getById)
    .post('/', citaController.create)
    .put('/:id', citaController.update)
    .delete('/:id', citaController._delete);

module.exports = router;