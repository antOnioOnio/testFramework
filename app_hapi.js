'use strict';

const Hapi = require('@hapi/hapi');
const {getDurationInMilliseconds} = require('./time.js');

const init = async () => {

    const server = Hapi.server({
        port: 8000,
        host: 'localhost',
        app: {}
    });


    server.route({
        method:'GET', 
        path:'/',
        handler: (req, h) => {
            const timeTaken  = getDurationInMilliseconds(process.hrtime())
            console.log(timeTaken);
            return "hello world!";
        }
    })

    await server.start();

    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();

