var NodeSchedule = require('node-schedule');

var TestScheduleConfig = require('./TestScheduleConfig');
var TestSchedule = require('./TestSchedule');

var GlobalSchedule = {
    /**
     * 初始化
     */
    init: function () {
        if (TestScheduleConfig.scheduleWithdrawalsEnabled) {
            var testJobCron = TestScheduleConfig.withdrawalsJobCron;
            var testScheduleFunction = TestSchedule.scheduleFunction();
            var testJob = NodeSchedule.scheduleJob(testJobCron, testScheduleFunction);
            console.log("schedule test enabled.");
        } else {
            console.log("schedule test disabled.");
        }

    }
};

module.exports = GlobalSchedule;