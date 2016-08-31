const _ = require('lodash');
const Backbone = require('backbone');

const ItemView = Backbone.View.extend({

  el: '<li></li>',

  template: _.template(`
    <div>Name: <%= item.get("name") %></div>
    <div>Quantity: <%= item.get("quantity") %></div>
  `),

  render() {
    this.$el.append(this.template({item: this.model}));
    return this;
  }
});

module.exports = ItemView;
