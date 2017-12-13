/**
 * Created by heipacker on 17-12-13.
 */
var PriceRequest = require("./PriceRequest");

module.exports = function (app) {

    /**
     *
     */
    app.get('/data/price', function (req, res, next) {
        PriceRequest.getPrice(req, function (err, result) {
            if (err) {
                return next(err);
            }
            res.send(result);
        })
    });
};