const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: String,
  quantity: String
});

module.exports = mongoose.model('Item', itemSchema);
