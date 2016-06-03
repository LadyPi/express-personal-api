//importing mongoose
var mongoose = require('mongoose'),
//using mongoose to create schema
  Schema = mongoose.Schema;

//profile schema creation format
var DestinationSchema = new Schema({
  location: String,
  id: Number,
});

//profile schema model creation
var Destination = mongoose.model('Destination', DestinationSchema);

//exporting profile model to be used outside of this file
module.exports = Destination;

