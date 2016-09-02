const $ = require('jquery');

// Set jQuery in the window
window.$ = window.jQuery = $;

const ItemListView = require('./views/ItemListView');
const ItemsCollection = require('./collections/ItemsCollection');

const items = new ItemsCollection();
items.fetch();
const view = new ItemListView({ collection: items});
const app = document.querySelector('#app');

app.appendChild(view.render().el);
