const path = require('path');

module.exports = {
  application: {
    port: 3000,
  },
  logger: {
    level: 'info',
    transport: 'console',
    'log-file-name': 'app.log',
  },
  'data-source': {
    'file-path': path.join(__dirname, '..', 'data', 'items.json'),
  },
};
