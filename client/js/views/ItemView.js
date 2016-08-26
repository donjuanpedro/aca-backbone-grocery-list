const _ = require('lodash');
const Backbone = require('backbone');

const ItemView = Backbone.View.extend({

  el: '<li></li>',

  template: _.template(`
    <div>Name: <%= item.name %></div>
    <div>Quantity: <%= item.quantity %></div>
  `),

  initialize(options) {
    this.item = optinos.item;
  },

  render() {
    this.$el.append(this.template({item: this.item}));
    return this;
  }
});

module.exports = ItemView;
