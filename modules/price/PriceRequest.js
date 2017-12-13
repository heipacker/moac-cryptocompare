/**
 * Created by heipacker on 17-03-22.
 */
var PriceConfig = require('./PriceConfig');
var Global = require('../global/Global');

var priceRequest = {

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
        var priceList = Global.priceList;
        var tsymList = tsyms.split(",");
        var result = {};
        for (var i = 0; i < tsymList.length; ++i) {
            var tsym = tsymList[i];
            if (!tsym) {
                continue;
            }
            for (var j = 0; j < priceList.length; ++j) {
                var priceItem = priceList[j];
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