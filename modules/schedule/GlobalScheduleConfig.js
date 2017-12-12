/**
 * Created by weijia on 16-11-20.
 */
var globalConfig = require('config');

var config = {
    scheduleWithdrawalsEnabled: false,
    withdrawalsJobCron: globalConfig.get("schedule.withdrawalsJobCron")
};

module.exports = config;