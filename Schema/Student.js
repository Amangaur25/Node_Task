const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    rollNo: {type: Number},
    stuClass: {type: Number},
    section: {type: String},
    userId: {type: Schema.ObjectId, ref: 'user'},
  });
  
  module.exports = mongoose.model('student', studentSchema);