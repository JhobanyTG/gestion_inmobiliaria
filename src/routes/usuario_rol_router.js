const express = require('express');
const router = express.Router();
const usuarioRolController = require('../controllers/usuario_rol_controller');

router
    .get('/', usuarioRolController.get)
    .get('/:id', usuarioRolController.getById)
    .post('/', usuarioRolController.create)
    .put('/:id', usuarioRolController.update)
    .delete('/:id', usuarioRolController._delete);

module.exports = router;