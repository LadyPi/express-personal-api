// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());


/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/LadyPi/express-personal-api", // CHANGE ME, changed url
    base_url: "https://agile-escarpment-42560.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints."},
    ]
  });
});
///////////////////////
// {method: "GET", path: "/api/destinations", description: "Vaca destination wishlist."}

app.get('/api/destinations', function destinationWishList_Index(req, res) {
  db.Destination.find({}, function(err, destinations) {
    res.json(destinations);
  });
});

///////////////////////
// {method: "POST", path: "/api/destinations", description: "Create a destination."}

app.post('/api/destinations', function destinationWishList_Create(req, res) {
  console.log('body', req.body);

///////////////////////

db.Destination.create(req.body, function(err, album) {
    if (err) { console.log('error', err); }
    console.log(destination);
    res.json(destination);
 });

///////////////////////



       // CHANGE ME
      {method: "POST", path: "/api/profiles", description: "Create a profile."}, // CHANGE ME
      {method: "GET", path: "/api/profile_id", description: "Get a single profile."}, // CHANGE ME
      {method: "PUT", path: "/api/:profile_id", description: "Update a profile with new info."}, // CHANGE ME
      {method: "DELETE", path: "/api/:profile_id", description: "Delete a profile."}, // CHANGE ME
      

      // {method: "GET", path: "/api", description: "Describes all available endpoints."},
      // DOES IT MATTER THAT THIS IS SEED.JS?
      {method: "GET", path: "/api/vacaWishList", description: "My Vaca Wishlist."}, // CHANGE ME
      // {method: "POST", path: "/api/vacaWishList", description: "Create destination."}, // CHANGE ME
      {method: "GET", path: "/api/vacaWishList_id", description: "Get a single destination."}, // CHANGE ME
      {method: "PUT", path: "/api/:vacaWishList_id", description: "Update a destination with new info."}, // CHANGE ME
      {method: "DELETE", path: "/api/:vacaWishList_id", description: "Delete a destination."}, // CHANGE ME
    ]
  });
});
/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
