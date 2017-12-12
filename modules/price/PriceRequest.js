/**
 * Created by heipacker on 17-03-22.
 */
var request = require('request');
var PriceConfig = require('./PriceConfig');
var priceRequest = {

    /**
     * 获取全局唯一id, 不保证全局有序, 但是基本有序
     * @param callback
     */
    getId: function (callback) {
        gidGenerator.getIdObj(function (err, result) {
            if (err) {
                return callback(err, result);
            }
            return callback(null, result.id);
        })
    }
};

module.exports = priceRequest;