const ItemModel = require('.models/ItemModel.js');

module.exports = {
  list: function(req, res) {
    ItemModel.find(function (err, posts) {
      res.render('items', { items });
    });
  },

  show: function (req, res) {
    var id = req.params.id;
    ItemModel.findOne({_id: id}, function (err, post) {
      return res.render('item_view', {item: item});
    });
  },

  edit: function (req, res) {
    var id = req.params.id;
    ItemModel.findOne({_id: id}, function (err, post) {
      return res.render('item_edit', {post: post});
    });
  },

  create: function (req, res) {
    const item = new ItemModel({
      name: req.body.name,
      quantity: req.body.quantity
    });
    item.save((err, item) => {
      res.redirect('/');
    });
  },

  update: function(req, res) {
    var id = req.params.id;
    ItemModel.findOne({_id: id}, function (err, post) {
      item.name = req.body.name;
      item.quantity = req.body.quantity;

      item.save(function (err, post) {
        res.redirect('/items');
      });
    });
  },

  remove: function(req, res) {
    var id = req.params.id;
    ItemModel.findByIdAndRemove({_id: id}, function (err, item) {
      remove.item;
    });
    items.save(function(err, posts) {
      res.redirect('/items');
    });
  },
};
