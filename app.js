var express = require('express'),
app = express(),
port = process.env.PORT || 3001,
mongoose = require('mongoose'),
Employee = require('./server/models/employeeModel'),
bodyParser = require('body-parser');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/myNewDatabase', { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var routes = require('./server/routes/employeeRoutes');

routes(app);

app.use(function(req, res) {

  res.status(404).send({url: req.originalUrl + ' not found'})

});

app.listen(port);

console.log('Timesheet Module -  RESTful web services with Nodejs started on: ' + port);