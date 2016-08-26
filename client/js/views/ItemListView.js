const Backbone = require('backbone');

const ItemListView = Backbone.View.extend({
  el: '<ul></ul>',

  initialize(options) {
    this.items = options.items;
  },

  render() {
    this.users.forEach((item) => {
      this.$el.append('<li>${item}</li>')
    });

    return this;

  }
});

module.exports = ItemListView;
