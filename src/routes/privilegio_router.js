const express = require('express');
const router = express.Router();
const privilegioController = require('../controllers/privilegio_controller');

router
    .get('/', privilegioController.get)
    .get('/:id', privilegioController.getById)
    .post('/', privilegioController.create)
    .put('/:id', privilegioController.update)
    .delete('/:id', privilegioController._delete);

module.exports = router;