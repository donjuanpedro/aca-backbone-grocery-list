const $ = require('jquery');

// Set jQuery in the window
window.$ = window.jQuery = $;

const ItemListView = require('/views/ItemListView');

const view = new ItemListView({ items:['apples', 'bananas', 'pears', 'peaches']});
const app = document.querySelector('#app');

app.append(view.render().el);
