const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ItemModel = require('..models/ItemModel.js');
const ItemController = require('../controllers/ItemsController.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', PostsController.list);

router.get('/:id', PostsController.show);

router.get('/:id/edit', PostsController.edit);

router.post('/', PostsController.create);

router.put('/:id', PostsController.update);

router.delete('/:id', PostsController.remove);

module.exports = router;
