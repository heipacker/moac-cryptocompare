var sensitiveUtils = {

    isChinese: function (s) {
        var pattern = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
        return pattern.exec(s);
    },

    padding: function (padding, num) {
        var result = "";
        for (var i = 0; i < num; ++i) {
            result += padding;
        }
        return result;
    },

    /**
     * [中文姓名] 只显示第一个汉字，其他隐藏为2个星号<例子：李**>
     * @param username
     * @returns {*}
     */
    username: function (username) {
        if (!username) {
            return "";
        }
        var len = sensitiveUtils.isChinese(username) || username.length < 4 ? 1 : 4;
        var padNum = len == 1 ? 4 : 2;
        return username.substring(0, len) + sensitiveUtils.padding("*", Math.min(Math.max(username.length - len, padNum), padNum));
    },

    /**
     * [身份证号] 显示最后四位，其他隐藏。共计18位或者15位。<例子：*************5762>
     * @param id
     * @returns {*}
     */
    idCardNum: function (id) {
        if (!id) {
            return '';
        }
        return sensitiveUtils.padding("*", id.length - 4) + id.substring(id.length - 4);
    },

    /**
     * [固定电话] 后四位，其他隐藏<例子：****1234>
     * @param phone
     * @returns {*}
     */
    fixedPhone: function (phone) {
        if (!phone) {
            return '';
        }
        return sensitiveUtils.padding("*", phone.length - 4) + phone.substring(phone.length - 4);
    },

    /**
     * [手机号码] 前三位，后四位，其他隐藏<例子:138******1234>
     * @param phone
     * @returns {*}
     */
    mobilePhone: function (phone) {
        if (!phone) {
            return '';
        }
        if (phone.length < 11) {
            return phone;
        }
        return phone.substring(0, 3) + sensitiveUtils.padding("*", phone.length - 7) + phone.substring(phone.length - 4);
    },

    /**
     * [地址] 只显示到地区，不显示详细地址；我们要对个人信息增强保护<例子：北京市海淀区****>
     * @param address
     * @param sensitiveSize
     * @returns {*}
     */
    address: function (address, sensitiveSize) {
        if (!address) {
            return "";
        }
        if (address.length < sensitiveSize) {
            return address;
        }
        return address.substring(0, sensitiveSize) + sensitiveUtils.padding("*", address.length - sensitiveSize);
    },
    /**
     * [电子邮箱] 邮箱前缀仅显示第一个字母，前缀其他隐藏，用星号代替，@及后面的地址显示<例子:g**@163.com>
     * @param email
     * @returns {*}
     */
    email: function (email) {
        if (!email) {
            return '';
        }
        var index = email.indexOf("@");
        if (index < 1) {
            return email;
        } else {
            return email.substring(0, 1) + sensitiveUtils.padding("*", index) + email.substring(index);
        }
    },

    /**
     * [银行卡号] 前六位，后四位，其他用星号隐藏每位1个星号<例子:6222600**********1234>
     * @param bankCard
     * @returns {*}
     */
    bankCard: function (bankCard) {
        if (!bankCard) {
            return "";
        }
        if (bankCard.length < 10) {
            return bankCard;
        }
        return bankCard.substring(0, 6) + sensitiveUtils.padding("*", bankCard.length - 10) + bankCard.substring(bankCard.length - 4);
    },

    /**
     * [公司开户银行联号] 公司开户银行联行号,显示前两位，其他用星号隐藏，每位1个星号<例子:12********>
     * @param code
     * @returns {*}
     */
    cnapsCode: function (code) {
        if (!code) {
            return "";
        }
        return code.substring(0, 2) + sensitiveUtils.padding("*", code.length - 2);
    }
};

module.exports = sensitiveUtils;