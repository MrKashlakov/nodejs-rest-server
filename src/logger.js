

const winston = require('winston');
const config = require('config');

const logger = new winston.Logger({
  level: config.get('logger.level'),
});

const transportName = config.get('logger.transport');

switch (transportName) {
  case 'console':
    logger.configure({
      transports: [new (winston.transports.Console)({ timestamp: true })],
    });
    break;
  case 'file':
    logger.configure({
      transports: [new (winston.transports.File)({
        name: 'log-file',
        filename: config.get('logger.log-file-name'),
      })],
    });
    break;
  default:
    logger.configure({
      transports: [new (winston.transports.Console)({ timestamp: true })],
    });
    break;
}

module.exports = logger;
