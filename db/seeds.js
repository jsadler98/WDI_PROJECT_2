const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbUri } = require('../config/environment');
const Film = require('../models/');

mongoose.connect(dbUri, { useMongoClient: true });

// Require the model

// Drop the model

// Create the models
