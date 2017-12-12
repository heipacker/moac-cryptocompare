#!/usr/bin/env node
var os = require("os");
var cluster = require('express-cluster');

cluster(function (worker) {
    var app = require('../app');
    var logger = require('../loggerFactory').getLogger('routers');

    app.set('port', process.env.PORT || 8887);

    var server = app.listen(app.get('port'), function () {
        logger.info('Express server listening on port ' + server.address().port + ", worker id is " + worker.id);
    });
}, {
    count: os.cpus().length,       // number of workers to spawn: defaults to CPU core count
    respawn: true,  // respawn process on exit: defaults to true
    verbose: false, // log what happens to console: defaults to false

    // Attach the given function to each spawned worker. The function will
    // be bound to the worker that sent the message so you can setup a two
    // way message bus if you please. See examples/messaging.js for an
    // example.
    workerListener: function () {
    }
});
