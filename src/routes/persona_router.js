const express = require('express');
const router = express.Router();
const personaController = require('../controllers/persona_controller');

router
    .get('/', personaController.get)
    .get('/:id', personaController.getById)
    .post('/', personaController.create)
    .put('/:id', personaController.update)
    .delete('/:id', personaController._delete);

module.exports = router;