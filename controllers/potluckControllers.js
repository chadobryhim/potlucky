//this needs to be kept in the final version

var models = require('../models'); // Pulls out the potluck Models
var dbMethods = reuire('/dbMethod.js')

// Extracts the sequelize connection from the models object
var sequelizeConnection = models.sequelize;

// Sync the tables
sequelizeConnection.sync();
