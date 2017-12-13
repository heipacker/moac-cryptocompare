/**
 * Created by heipacker on 17-12-13.
 */
module.exports = function () {
    return function (req, res, next) {
        req._startTime = Date.now();

        var calResponseTime = function () {
            var deltaTimestamp = Date.now() - req._startTime;
            //判断大于300ms
            if (deltaTimestamp > 250) {
                console.log("timemonitor", req.ip, req.method, req.originalUrl, "elapsed", deltaTimestamp + "ms");
            }
        };
        res.once('finish', calResponseTime);
        res.once('close', calResponseTime);
        return next();
    };
};