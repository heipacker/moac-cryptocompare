var md5 = require('md5');

var SignUtils = {

    signParams: function (apiKey, apiSecret, params) {
        var paramKeys = [];
        var data = {};
        var keys = Object.keys(params);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            if (!SignUtils.filter(key)) {
                continue;
            }
            data[key.toUpperCase()] = params[key];
            paramKeys.push(key.toUpperCase());
        }
        return SignUtils.sign(apiKey, apiSecret, paramKeys, data);
    },

    filter: function (key) {
        return !(key == 'sign' || typeof key != 'string');
    },

    sign: function (apiKey, apiSecret, paramsKeys, data) {
        paramsKeys.sort();
        var paramsString = "";
        for (var j = 0; j < paramsKeys.length; ++j) {
            if (paramsString != "") {
                paramsString += "&";
            }
            paramsString = paramsKeys[j] + "=" + data[paramsKeys[j]]
        }
        paramsString += apiKey + apiSecret;
        return md5(paramsString.toUpperCase());
    },

    randomStr: function (randomFlag, min, max) {
        var seeds = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
            'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
            'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
            'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
            'W', 'X', 'Y', 'Z'];
        var range = min;
        // 随机产生
        if (randomFlag) {
            range = Math.round(Math.random() * (max - min)) + min;
        }
        var str = "";
        for (var i = 0; i < range; i++) {
            str += seeds[Math.round(Math.random() * (seeds.length - 1))];
        }
        return str;
    }
};
module.exports = SignUtils;