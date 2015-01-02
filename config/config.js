/**
 * Created by janos on 29/12/14.
 */
// Invoke 'strict' JavaScript mode
'use strict';

// Load the correct configuration file according to the 'NODE_ENV' variable (the default value is set in server.js)
module.exports = require('./env/' + process.env.NODE_ENV + '.js');