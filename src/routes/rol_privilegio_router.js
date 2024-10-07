const express = require('express');
const router = express.Router();
const rolPrivilegioController = require('../controllers/rol_privilegio_controller');

router
    .get('/', rolPrivilegioController.get)
    .get('/:id', rolPrivilegioController.getById)
    .post('/', rolPrivilegioController.create)
    .put('/:id', rolPrivilegioController.update)
    .delete('/:id', rolPrivilegioController._delete);

module.exports = router;