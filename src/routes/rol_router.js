const express = require('express');
const router = express.Router();
const rolController = require('../controllers/rol_controller');

router
    .get('/', rolController.get)
    .get('/:id', rolController.getById)
    .post('/', rolController.create)
    .put('/:id', rolController.update)
    .delete('/:id', rolController._delete);

module.exports = router;