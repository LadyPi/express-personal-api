var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI || 3000,
                  process.env.MONGOHQ_URL || 3000,
                  "mongodb://localhost/personal-api");


module.exports.Profile = require("./destinations.js");