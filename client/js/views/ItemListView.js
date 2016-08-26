const Backbone = require('backbone');
const ItemView = require('./ItemView');

const ItemListView = Backbone.View.extend({
  el: '<ul></ul>',

  initialize(options) {
    this.items = options.items;
  },

  render() {
    this.users.forEach((item) => {
      const itemView = new ItemView({ item: item});
      this.$el.append(
        itemView.render().el
      );
    });

    return this;

  }
});

module.exports = ItemListView;
