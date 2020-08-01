require("dotenv-extended").load();
require('app-module-path').addPath(__dirname);
const models = require('models');
require('models/register')(); //Registering models essentials after requiring models. One time.