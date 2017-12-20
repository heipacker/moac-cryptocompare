/**
 * Created by heipacker on 2016/11/29.
 */
'use strict';
process.env.TZ = 'Asia/Shanghai';

process.on('uncaughtException', function (err) {
    // 记录日志
    console.log(err);
    // 结束进程
    process.exit(1);
});

var path = require('path');
var express = require('express');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var xmlParser = require('express-xml-bodyparser');
var expressSession = require('express-session');
// var RedisClient = require('./modules/common/RedisClient');
var RedisStore = require('connect-redis')(expressSession);
var timeMonitor = require('./modules/common/TimeMointor');

var globalConfig = require('config');

var app = express();
app.use(timeMonitor());
app.use(favicon());
app.use(logger());//default, short, dev
app.use(express.query());
app.use(bodyParser.json());
app.use(xmlParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(require('express-domain-middleware'));

var config = {
    session_secret: globalConfig.get("session.secret")
};
app.use(expressSession({
    // store: new RedisStore({
    //     prefix: "auction_",
    //     client: RedisClient,
    //     host: globalConfig.get("redis.host"),
    //     port: globalConfig.get("redis.port"),
    //     logErrors: true
    // }),
    secret: config.session_secret,
    resave: false,
    saveUninitialized: false,
    cookie: {secure: false, maxAge: 1000 * 60 * 60 * 24 * 365}
}));
app.use(express.static(path.join(__dirname, 'public')));
var ipv4 = require('express-ipv4');
app.use(ipv4());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var routes = require('./routes');
routes(app);

app.use(function (err, req, res, next) {
    console.error(process.domain ? process.domain.id : "", req.ip, req.get('X-Forwarded-For'), req.method, req.originalUrl, err);
    res.status(err.status || err.code || 500).send({
        code: err.code || err.status || 500,
        data: err.message
    }).end();
});

require('./modules/global/Global').init();
require('./modules/schedule/GlobalSchedule').init();

module.exports = app;
