var requestUtils = {

    /**
     * 获取用户id
     * @param req
     * @returns {*}
     */
    getUserId: function (req) {
        if (req.session && req.session.user) {
            return req.session.user.userid;
        }
        return null;
    }
};

module.exports = requestUtils;