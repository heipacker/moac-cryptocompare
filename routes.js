/**
 * routes - the router of url request
 */
var PriceRouter = require('./modules/price/PriceRouter');

module.exports = function (app) {
    PriceRouter(app);
};
