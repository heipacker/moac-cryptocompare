var redis = require('redis');

var redisClient = redis.createClient("6379", "127.0.0.1");
redisClient.get("test", function (err, result) {
    console.log(err, result);
});