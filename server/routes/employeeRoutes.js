'use strict';

module.exports = function(app) {

    var employee = require('../controllers/employeeController');

    app.route('/employees')

        .get(employee.employees)

       


};