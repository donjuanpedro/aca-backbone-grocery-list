const Backbone = require('backbone');
const ItemView = require('./ItemView');

const ItemListView = Backbone.View.extend({
  el: `
    <div>
      <form>
        <div>
          <label for="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label for="quantity">Quantity</label>
          <input type="text" name="quantity" />
        </div>
        <input type="submit" value="+ New Item" />
      </form>
      <ul></ul>
    </div>
  `,

  initialize(options) {
    this.items = options.items;
  },

  events: {
    'submit form': 'handleFormSubmit'
  },

  handleFormSubmit(e) {
    const form = $(e.target);
    const item = {
      name: form.find('input[name="name"]').val(),
      quantity: form.find('input[name="quantity"]').val(),
    };

    this.items.push(item);
    form.find('input[type="text"]').val('');
    this.render();
    e.preventDefault();
  },

  render() {
    this.$el.find('ul').html('');
    this.users.forEach((item) => {
      const itemView = new ItemView({ item: item});
      this.$el.find('ul').append(
        itemView.render().el
      );
    });

    return this;
  }
});

module.exports = ItemListView;
