const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

//Rotas
router.post('/', userController.create);
router.get('/', userController.getAll);
router.get('/:id', userController.getOne);
router.put('/:id', userController.updateOne);
router.delete('/:id', userController.delete);

module.exports = router;