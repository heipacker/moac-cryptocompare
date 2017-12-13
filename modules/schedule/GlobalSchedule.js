/**
 * Created by heipacker on 17-12-13.
 */
var NodeSchedule = require('node-schedule');

var CoinbeneScheduleConfig = require('./CoinbeneScheduleConfig');
var CoinbeneSchedule = require('./CoinbeneSchedule');

var GlobalSchedule = {
    /**
     * 初始化
     */
    init: function () {
        if (CoinbeneScheduleConfig.scheduleTestEnabled) {
            var testJobCron = CoinbeneScheduleConfig.coinbeneJobCron;
            var testScheduleFunction = CoinbeneSchedule.scheduleFunction();
            var testJob = NodeSchedule.scheduleJob(testJobCron, testScheduleFunction);
            console.log("schedule coinbene enabled.");
        } else {
            console.log("schedule coinbene disabled.");
        }

    }
};

module.exports = GlobalSchedule;