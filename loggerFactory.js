var loggerFactory = require('log4js');
loggerFactory.configure(__dirname + '/log4j.json', { cwd: __dirname + '/logs' });

module.exports = loggerFactory;