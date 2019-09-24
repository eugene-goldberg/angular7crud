const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Index = new Schema({
  person_name: {
    type: String
  },
  business_name: {
    type: String
  },
  business_gst_number: {
    type: Number
  }
},{
    collection: 'index'
});

module.exports = mongoose.model('Index', Index);
