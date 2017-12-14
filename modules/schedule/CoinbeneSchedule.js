var request = require('request');
var ApplicationError = require('../error/ApplicationError');
var CoinbeneScheduleConfig = require("./CoinbeneScheduleConfig");
var SignUtils = require("../common/SignUtils");
var Global = require('../global/Global');

/**
 * Created by heipacker on 17-12-13.
 */
var Schedule = {

    exchange: "coinbene",

    /**
     * 初始化
     */
    init: function () {
        //todo
    },

    scheduleFunction: function () {
        return function () {
            console.log("beginning get price from " + Schedule.exchange);
            Schedule.getPrice(function (err, result) {
                if (err) {
                    console.log("get price error", err);
                    return
                }
                var priceList = Global.exchangePriceListMap[Schedule.exchange];
                for (var i = 0; i < priceList.length; ++i) {
                    var priceItem = priceList[i];
                    if (priceItem.tsym == "USD") {
                        priceItem.price = parseFloat(result);
                        console.log("update moac price to " + result + " " + priceItem.tsym);
                        break
                    }
                }
            });
        };
    },

    getPrice: function (callback) {
        var url = "http://api.coinbene.com/market/v1/orderbook";
        var apiKey = CoinbeneScheduleConfig.coinbeneApiKey;
        var apiSecret = CoinbeneScheduleConfig.coinbeneApiSecret;
        var options = {
            method: 'POST',
            url: url,
            headers: {
                'Connection': 'close',
                'Content-Type': 'application/json'
            },
            json: true,
            body: {
                apikey: apiKey,
                depth: CoinbeneScheduleConfig.coinbeneDepth,
                symbol: CoinbeneScheduleConfig.coinbeneSymbol,
                key: apiSecret
            }
        };
        var body = options.body;
        body.sign = SignUtils.signParams(apiKey, apiSecret, body);
        delete  body.key;

        var timestamp = Date.now();
        request(options, function (err, res, data) {
            console.log("get order book elapsed", Date.now() - timestamp, "mills");
            if (err) {
                console.log(err);
                return callback(new ApplicationError("get order book error"));
            }
            if (res.statusCode === 200) {
                console.log("get coinbene result " + JSON.stringify(data));
                if (data.exeStatus == 1) {
                    var orderBook = data.orderbook;
                    callback(null, orderBook.price);
                } else {
                    callback(new ApplicationError("get order book failed"));
                }
            } else {
                console.log(res.body);
                callback(new ApplicationError("get order book failed, status code " + res.statusCode + " is not 200"));
            }
        });
    }
};

module.exports = Schedule;