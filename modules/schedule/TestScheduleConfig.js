/**
 * Created by heipacker on 17-12-13.
 */
var globalConfig = require('config');

var config = {
    scheduleTestEnabled: false,
    testJobCron: globalConfig.get("schedule.testJobCron")
};

module.exports = config;