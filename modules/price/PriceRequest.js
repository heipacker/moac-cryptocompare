/**
 * Created by heipacker on 17-03-22.
 */
var request = require('request');
var PriceConfig = require('./PriceConfig');
var priceRequest = {

    priceMap: [
        {
            tsym: "BTC",
            price: 0.01
        },
        {
            tsym: "USD",
            price: 10
        },
        {
            tsym: "EUR",
            price: 9.8
        },
        {
            tsym: "GBP",
            price: 10
        },
        {
            tsym: "BRL",
            price: 100
        }
    ],

    /**
     * get price on all currency
     *
     * @param req
     * @param callback
     */
    getPrice: function (req, callback) {
        var params = req.query;
        if (!params || !params.fsym || !params.tsyms) {
            return res.send({
                code: 1,
                msg: 'missing parameters'
            });
        }
        var fsym = params.fsym;
        var tsyms = params.tsyms;
        var extraParams = params.extraParams;

        console.log("application: " + extraParams + ", fsym=" + fsym + ", tsyms=" + tsyms);
        var tsymList = tsyms.split(",");
        var result = {};
        for (var i = 0; i < tsymList.length; ++i) {
            var tsym = tsymList[i];
            for (var j = 0; j < priceRequest.priceMap.length; ++j) {
                var priceItem = priceRequest.priceMap[j];
                if (priceItem.tsym == tsym) {
                    result[tsym] = priceItem.price;
                    break
                }
            }
        }
        callback(null, result);
    }
};

module.exports = priceRequest;