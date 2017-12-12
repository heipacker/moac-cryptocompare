var Moment = require('moment-timezone');

module.exports = {

    /**
     * 格式化
     * @param timestamp
     * @returns {*}
     */
    localDateFormatter: function (timestamp) {
        return Moment(timestamp).tz('Asia/Shanghai');
    }
};