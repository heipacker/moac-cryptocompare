/**
 * Created by weijia on 16-11-20.
 */
var globalConfig = require('config');

var config = {
    urlPrefix: globalConfig.get("gid.url")
};

module.exports = config;