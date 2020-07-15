const Path = require('path');
// const Sentry = require('winston-sentry');
const moment = require('moment');
const winston = require('winston');

const { combine, printf } = winston.format;

const myFormat = printf(({ level, message }) => {
  if (process.env.NODE_ENV === 'development') {
    return `${level}: ${message}`;
  } else {
    return `${moment().utc().format()} - ${level}: ${message}`;
  }
});

const transports = [
  new winston.transports.File({
    name: 'file-info-logger',
    filename: Path.join(__dirname, 'log/server.log'),
    format: combine(myFormat),
    handleExceptions: true,
    humanReadableUnhandledException: true
  })
];

// if (process.env.NODE_ENV === 'development') {
//   transports.push(
//     new winston.transports.Console({
//       handleExceptions: true,
//       humanReadableUnhandledException: true,
//       format: combine(myFormat)
//     })
//   ); //For Console log
// } else {
//   transports.push(
//     new Sentry({
//       name: 'error-logger',
//       patchGlobal: true,
//       level: 'error',
//       dsn: config.sentry.dsn,
//       tags: config.sentry.tags,
//       release: config.version
//     })
//   );
// }

const logger = winston.createLogger({
  transports
});

module.exports = logger;
