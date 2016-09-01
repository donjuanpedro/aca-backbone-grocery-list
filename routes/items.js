const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ItemModel = require('../models/ItemModel.js');
const ItemsController = require('../controllers/ItemsController.js');


/* GET users listing. */

router.get('/', ItemsController.list);

router.get('/:id', ItemsController.show);

router.get('/:id/edit', ItemsController.edit);

router.post('/', ItemsController.create);

router.put('/:id', ItemsController.update);

router.delete('/:id', ItemsController.remove);

module.exports = router;
