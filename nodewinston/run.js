var mylogger = require('./libs/loggerAPI')(module);

//set node env
process.env.NODE_ENV = 'development';

/* information log message */
mylogger.info('My Application is execute');

/* information log message to file */
mylogger.log('info', 'Write this information event into log file!');

/* warning log message to file */
mylogger.log('warn', 'Write this warning event into log file!');

/* error log message to file */
mylogger.log('error', 'Write this event into log file!');
