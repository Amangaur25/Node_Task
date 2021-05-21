const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String},
    phone: {type: Number},
    email: {type: String},
    address: {type: String},
    createdAt: {type: Date, default: Date.now}
  });
  
  module.exports = mongoose.model('user', userSchema);