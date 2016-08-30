const $ = require('jquery');

// Set jQuery in the window
window.$ = window.jQuery = $;

const ItemListView = require('./views/ItemListView');


const view = new ItemListView({ items:[]});
const app = document.querySelector('#app');

app.appendChild(view.render().el);
