const express = require('express');
const router = express.Router();
const accionDiariaController = require('../controllers/accion_diaria_controller');

router
    .get('/', accionDiariaController.get)
    .get('/:id', accionDiariaController.getById)
    .post('/', accionDiariaController.create)
    .put('/:id', accionDiariaController.update)
    .delete('/:id', accionDiariaController._delete);

module.exports = router;