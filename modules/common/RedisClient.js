/**
 * Created by heipacker on 17-12-13.
 */
var RedisClustr = require('redis-clustr');
var redis = require('redis');
var config = require('config');

var redisClient;
// if (config.util.getEnv('NODE_ENV') === 'development') {
if ('development' === 'development') {
    redisClient = redis.createClient(config.get("redis.port"), config.get("redis.host"));
    console.log("redis startup connect info %s:%s", config.get("redis.host"), config.get("redis.port"));
} else {
    redisClient = new RedisClustr({
        servers: config.get("redis"),
        createClient: function (port, host) {
            // this is the default behaviour
            return redis.createClient(port, host);
        }
    });
    console.log("redis startup connect info %s", config.get("redis"));
}

module.exports = redisClient;