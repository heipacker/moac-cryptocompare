/**
 * Created by heipacker on 17-12-13.
 */
var globalConfig = require('config');

var config = {
    scheduleWithdrawalsEnabled: false,
    withdrawalsJobCron: globalConfig.get("schedule.withdrawalsJobCron")
};

module.exports = config;