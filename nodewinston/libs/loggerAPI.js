/**
 *   Logger API for loggin events in My application
 *
 *
 */
var ENV = process.env.NODE_ENV; 
var winston = require('winston');
require('winston-mail').Mail;

function getLogger(module) {
    
    var path = module.filename.split('/').slice(-2).join('/');
    
    return new winston.Logger({
        transports: [
                new winston.transports.Console({
                    colorize: true,
                    timestamp: true,
                    level: (ENV == 'development') ? 'info' : 'error',
                    label: path
                }),
                new winston.transports.File({
                    filename: './logs/somefile.log',
                    level: 'error'
                }),
                new winston.transports.Mail({
                    to: 'me',
                    from: 'you',
                    host: 'localhost',
                    port: '25',
                    username: 'admin',
                    password: 'admin',
                    silent: true,
                    level: (ENV == 'development') ? 'info' : 'error'
                })
        ]    
    });
}

module.exports = getLogger;