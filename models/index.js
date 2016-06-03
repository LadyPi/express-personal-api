var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI || 3000,
                  process.env.MONGOHQ_URL || 3000,
                  "mongodb://localhost/express-personal-api");


module.exports.Destination = require("./destinations.js");