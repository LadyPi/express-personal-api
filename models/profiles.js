//importing mongoose
var mongoose = require('mongoose'),
//using mongoose to create schema
  Schema = mongoose.Schema;

//profile schema creation format
var ProfileSchema = new Schema({
  name: Vanessa,
  github_link: "https://github.com/LadyPi",
  github_profile_image: "https://avatars2.githubusercontent.com/u/16618837?v=3&u=eabcc07dc8812e6b807c73922dd4c756201a03c3&s=140",
  current_city: "San Francisco",
  pets: [{name: "Char", type: "Cat"}, {name: "Scoots", type: "Cat"}]
});

//profile schema model creation
var Profile = mongoose.model('Profile', ProfileSchema);

//exporting profile model to be used outside of this file
module.exports = Profile;

