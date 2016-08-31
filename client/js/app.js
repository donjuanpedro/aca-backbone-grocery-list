const $ = require('jquery');

// Set jQuery in the window
window.$ = window.jQuery = $;

const ItemListView = require('./views/ItemListView');
const ItemsCollection = require('./collections/ItemsCollection');

const items = new ItemsCollection();
items.fetch({
  success() {
    const view = new ItemListView({ collection: items});
    const app = document.querySelector('#app');

    app.append(view.render().el);
  }
});
