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
            var coinbeneJobCron = CoinbeneScheduleConfig.coinbeneJobCron;
            var coinbeneScheduleFunction = CoinbeneSchedule.scheduleFunction();
            coinbeneScheduleFunction();
            var testJob = NodeSchedule.scheduleJob(coinbeneJobCron, coinbeneScheduleFunction);
            console.log("schedule coinbene enabled.");
        } else {
            console.log("schedule coinbene disabled.");
        }

    }
};

module.exports = GlobalSchedule;