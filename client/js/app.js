const $ = require('jquery');

// Set jQuery in the window
window.$ = window.jQuery = $;

const ItemListView = require('./views/ItemListView');


const view = new ItemListView({ items:[]});
const app = document.querySelector('#app');

const greeting = document.createElement('h2');
greeting.innerText = 'Backbone Groceries';

app.appendChild(view.render().el);
