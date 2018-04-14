var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var employeeSchema = new Schema({

  name: { type: String, Required:  'name cannot be left blank.' },
  org:    { type: String,     Required:  'org cannot be left blank.'},
  area: { type: String ,    Required:  'area cannot be left blank'},
  location: { type: String ,    Required:  'location cannot be left blank'},
  skillset: { type: Array ,    Required:  'skillset cannot be left blank'},
  rate:{type:Number, Required:  'rate cannot be left blank'},
  afe: { type: Number ,    Required:  'afe cannot be left blank'},
  project: { type: String ,    Required:  'project cannot be left blank'}
  
});

module.exports = mongoose.model('Employees', employeeSchema);