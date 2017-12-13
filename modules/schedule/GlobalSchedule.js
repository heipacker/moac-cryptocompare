/**
 * Created by heipacker on 17-12-13.
 */
var NodeSchedule = require('node-schedule');

var TestScheduleConfig = require('./TestScheduleConfig');
var TestSchedule = require('./TestSchedule');

var GlobalSchedule = {
    /**
     * 初始化
     */
    init: function () {
        if (TestScheduleConfig.scheduleTestEnabled) {
            var testJobCron = TestScheduleConfig.testJobCron;
            var testScheduleFunction = TestSchedule.scheduleFunction();
            var testJob = NodeSchedule.scheduleJob(testJobCron, testScheduleFunction);
            console.log("schedule test enabled.");
        } else {
            console.log("schedule test disabled.");
        }

    }
};

module.exports = GlobalSchedule;