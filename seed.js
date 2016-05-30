// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var destinationWishList = [
				{
				 destination: 'Amsterdam',
	             country: 'The Netherlands'
				},
				{
				 destination: 'Venice',
	             country: 'Italy'
				},
				{
				 destination: 'Madrid',
	             country: 'Spain'
				}
];


db.Destination.create(destinationWishList, function(err, destinations) {
  if (err){
    return console.log("Error:", err);
  }
  });

  console.log("Created new destination", destination._id);
  process.exit(); // we're all done! Exit the program.






// At least one resource (mongoose model) that you can CRUD using RESTful Routes
// That means endpoints for index, show, create update, delete!

// All API Endpoints must return JSON.