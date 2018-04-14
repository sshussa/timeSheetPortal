'use strict';

var mongoose = require('mongoose'),

Employee = mongoose.model('Employees');

exports.employees = function(req, res) {

  Employee.find({}, function(err, employee) {

    if (err)

      res.send(err);

    res.json(employee);

  });

};

