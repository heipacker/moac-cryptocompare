/**
 * Append querystring to a url
 */
var utils = {
    queryAppend: function (url, options) {
        if (!options) {
            return url;
        }
        var first = true;
        var _url = url;
        for (var p in options) {
            _url += (first ? '?' : '&') + p + '=' + options[p];
            first = false;
        }
        return _url;
    },

    /**
     * 生成指定长度验证码
     * @returns {string}
     */
    generateValidateCode: function (length) {
        if (!length) {
            length = 4;
        }
        var result = "";
        for (var i = 0; i < length; ++i) {
            result += Math.floor(Math.random() * 10);
        }
        return result;
    }
};

module.exports = utils;