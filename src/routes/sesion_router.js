const express = require('express');
const router = express.Router();
const sesionController = require('../controllers/sesion_controller');

router
    .get('/', sesionController.get)
    .get('/:id', sesionController.getById)
    .post('/', sesionController.create)
    .put('/:id', sesionController.update)
    .delete('/:id', sesionController._delete);

module.exports = router;