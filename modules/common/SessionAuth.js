exports.authorize = function (req, res, next) {
    if (!req.session.user) {
        console.error(req.ip, req.method, req.originalUrl);
        res.status(403).send({
            code: -1,
            data: '用户未登录.'
        });
    } else {
        next();
    }
};