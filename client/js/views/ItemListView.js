const Backbone = require('backbone');
const ItemView = require('./ItemView');
const ItemModel = require('../models/ItemModel');

const ItemListView = Backbone.View.extend({
  el: `
    <div>
      <form action="/items" method="POST">
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

  events: {
    'submit form': 'handleFormSubmit'
  },

  handleFormSubmit(e) {
    const form = $(e.target);
    const item = new ItemModel({
      name: form.find('input[name="name"]').val(),
      quantity: form.find('input[name="quantity"]').val(),
    });

    item.save(null, {
      success: () => {
        //Add the new item
        this.collection.add(item);
        //Empty form inputs
        form.find('input[type="text"]').val('');
        //re-render the list
        this.render();
      }
    });
    //Prevent the form's default action
    e.preventDefault();
  },

  render() {
    this.$el.find('ul').html('');
    this.collection.forEach((item) => {
      const itemView = new ItemView({ model: item});
      this.$el.find('ul').append(
        itemView.render().el
      );
    });
    return this;
  }
});

module.exports = ItemListView;
