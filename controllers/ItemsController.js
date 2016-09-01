const ItemModel = require('../models/ItemModel.js');

module.exports = {
  list: function(req, res) {
    ItemModel.find(function (err, items) {
      res.json(200, items);
    });
  },

  show: function (req, res) {
    var id = req.params.id;
    ItemModel.findOne({_id: id}, function (err, item) {
      return res.render('item_view', {item: item});
    });
  },

  edit: function (req, res) {
    var id = req.params.id;
    ItemModel.findOne({_id: id}, function (err, item) {
      return res.render('item_edit', {item: item});
    });
  },

  create: function (req, res) {
    const item = new ItemModel({
      name: req.body.name,
      quantity: req.body.quantity
    });
    item.save((err, item) => {
      res.redirect('/items');
    });
  },

  update: function(req, res) {
    var id = req.params.id;
    ItemModel.findOne({_id: id}, function (err, item) {
      item.name = req.body.name;
      item.quantity = req.body.quantity;

      item.save(function (err, item) {
        res.redirect('/items');
      });
    });
  },

  remove: function(req, res) {
    var id = req.params.id;
    ItemModel.findByIdAndRemove({_id: id}, function (err, item) {
      items.remove(item);
    });
    items.save(function(err, items) {
      res.redirect('/items');
    });
  },
};
