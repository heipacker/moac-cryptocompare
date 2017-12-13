/**
 * Created by heipacker on 17-12-13.
 */
var globalConfig = require('config');

var config = {
    scheduleTestEnabled: true,
    coinbeneApiKey: globalConfig.get("coinbene.coinbeneApikey"),
    coinbeneApiSecret: globalConfig.get("coinbene.coinbeneApisecret"),
    coinbeneDepth: 20,
    coinbeneSymbol: 'MOACUSDT',
    coinbeneJobCron: globalConfig.get("schedule.coinbeneJobCron")
};

module.exports = config;