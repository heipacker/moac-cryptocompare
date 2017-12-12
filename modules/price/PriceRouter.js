var PriceRequest = require("./PriceRequest");

module.exports = function (app) {

    /**
     *
     */
    app.get('/v1/gid', function (req, res, next) {
        PriceRequest.getIdObj(function (err, result) {
            if (err) {
                return next(err);
            }
            res.send(result);
        })
    });
};