// require express and other module
var express = require('express');
    app = express();
var mongoose = require("mongoose");
var router = express.Router();

///////////////////////////////////////////////////////

// parse incoming urlencoded form data
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

///////////////////////////////////////////////////////
//ejs initialization

app.set('views', './views');
app.set('view engine', 'ejs');

/////////////////////////////////////////////////////////
//DATABASE
/////////////////////////////////////////////////////////
// importing 'destination' model

var db = require('./models/destinations');

///////////////////////////////////////////////////////
//seed data
//destination wish list

// var destination = [
//         {
//          location: 'Amsterdam',
//          id: 9
//         },
//         {
//          location: 'Venice',
//          id: 12
//         },
//         {
//          location: 'Madrid',
//          id: 3
//         }
// ];

/////////////////////////////////////////////////////////
// JSON API Endpoints
/////////////////////////////////////////////////////////

  app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    name: "Vanessa",
    documentation_url: "https://github.com/LadyPi/express-personal-api",
    base_url: "https://agile-escarpment-42560.herokuapp.com",
    current_city: "San Francisco",
    pets: [{name: "Char", type: "Cat"}, {name: "Scoots", type: "Cat"}],
    endpoints: [
      {method: "GET", path: "/api/destinations", description: "Vaca destination wish list."},
      {method: "GET", path: "/api/destinations/:id", description: "Select a destination on wish list by 'id'."},
      {method: "POST", path: "/api/destinations", description: "create a destination."}
      // TODO
      // {method: "PUT", path: "/api/:destination_id", description: "Update a destination with new info."},
      // {method: "DELETE", path: "/api/:destination_id", description: "Delete a destination."}
    ]
  });
});

/////////////////////////////////////////////////////////
                      //ROUTES
/////////////////////////////////////////////////////////

//test
// router.get('/', function(req, res) {
//   res.json({message: "I'm working!"});
// });

///////////////////////////////////////////////////////

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/////////////////////////////////////////////////////////
//HTML Endpoints
/////////////////////////////////////////////////////////

router.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/////////////////////////////////////////////////////////
//root

router.get('/', function(req, res) {
//   db.Destination.find({}, function(err, destinations) {
  console.log('Hello from the top!');
  // res.send("Home!");   
  res.render('index', {header: 'index'});
//res.json(destinations);
//   });
});

/////////////////////////////////////////////////////////
//pull form

router.get('/form', function(req, res) {
  res.render('form', {header: 'form'});
});

/////////////////////////////////////////////////////////
// {method: "GET", path: "/api/destinations", description: "Vaca destination wish list."}

// router.route('api/destinations')// try this method after getting it to work properly

  router.get('/api/destinations', function(req, res) {
  // db.Destination
  console.log(req.body); //check for what is being received
  res.json(destinations);
});

////////////////////////////////////////////////////////
// {method: "GET", path: "/api/destinations/:id", description: "Select a destination on wish list by 'id'."}

router.get('/api/destinations/:id', function(req, res) {
  for(var i = 0; i < destinations/length; i++) {
    if(req.params.id == destinations[i].id) {
       res.json(destinations[i]);
    }
  }
});

////////////////////////////////////////////////////////
// {method: "POST", path: "/api/destinations", description: "create a destination."}

router.post('api/destinations', urlencodedParser, function(req, res) {
  if(!req.body) {
    return res.sendStatus(400);
  } else {
      if(typeof(req.body.id === "string")) {
        var num = parseInt(req.body.id);
        req.body.id = num;       
  }
      destinations.push(req.body);
      res.json(destinations);
}
});

/////////////////////////////////////////////////////////

// db.Destination.create(req.body, function(err, destination) {
//     if (err) { console.log('error', err); }
//     console.log(destination);
//     res.json(destination);
//  });

/////////////////////////////////////////////////////////

//establishing that we would like to use express's 'router'

app.use('/api', router);

/////////////////////////////////////////////////////////
//SERVER
/////////////////////////////////////////////////////////

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
