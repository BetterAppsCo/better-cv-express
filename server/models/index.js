const fs = require('fs');
const path = require('path');
var pg = require('pg');
pg.defaults.parseInt8 = true;
const Sequelize = require('sequelize');
const logger = require('../logger');

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_password, {
  host: process.env.DATABASE_HOST,
  dialect: 'postgres',
  benchmark: true,
  logging: (msg, executionTime) => {
    logger.info(`[${executionTime} ms] ${msg}`);
  },
  pool: {
    max: 50,
    min: 3,
    acquire: 30000,
    idle: 10000
  }
});
const db = {};
const excludedFromModels = ['index.js', 'hooks', 'instanceMethods', 'staticMethods', 'register.js'];
fs.readdirSync(__dirname)
  .filter(file => {
    return file.indexOf('.') !== 0 && !excludedFromModels.includes(file);
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db.names = [...(db.names || []), model.name];
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
