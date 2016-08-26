const $ = require('jquery');

// Set jQuery in the window
window.$ = window.jQuery = $;

const ItemListView = require('/views/ItemListView');

const view = new ItemListView({ items:['Rick', 'Morty', 'Jake', 'Fin']});
const app = document.querySelector('#app');

app.append(view.render().el);

// Set greeting
const greeting = document.createElement('h2');
greeting.innerText = 'Express Backbone Starter App!';

app.appendChild(greeting);
