var SignUtils = require("../modules/order-api/SignUtils");

var data = {
    appid: ['wx59fbe72de7c42d1c'],
    bank_type: ['CFT'],
    cash_fee: ['1'],
    fee_type: ['CNY'],
    is_subscribe: ['Y'],
    mch_id: ['1432950402'],
    nonce_str: ['qkiMWAr3vOqvzcU85WFELvgKV6x6ub8B'],
    openid: ['oor9ywMZNF4xtqathh34l5jQ7gZk'],
    out_trade_no: ['2017061953727'],
    result_code: ['SUCCESS'],
    return_code: ['SUCCESS'],
    sign: ['0F451D94BABA7E0EBCDB6A5A8474F7C2'],
    time_end: ['20170114190604'],
    total_fee: ['1'],
    trade_type: ['NATIVE'],
    transaction_id: ['4005532001201701146315148209']
};

var sign = SignUtils.signWeixinCallback("bOU7cqOGmOdaEQTQApjhXXJVeSX5HcoU", data);
console.log(sign);


var requestParams = [
    {
        xml: [
            {
                mch_appid: 'wx59fbe72de7c42d1c'
            },
            {
                mchid: '1432950402'
            },
            {
                nonce_str: 'ovl3cmVvKsd1p9j4iW2lXaHHovWJhqvF'
            },
            {
                partner_trade_no: '20172504137210'
            },
            {
                openid: 'o6j4TxBNci5NfBt3VpwWs2W-wEhQ'
            },
            {
                check_name: "NO_CHECK"//"OPTION_CHECK"
            },
            {
                amount: 100//单位是分
            },
            {
                desc: '这是区块链杂货铺支付给您最近在平台上的收入.'
            },
            {
                notify_url: 'https://pai.skyfromwell.com/v1/wxpay/callback'
            },
            {
                spbill_create_ip: '120.24.221.115'
            }
        ]
    }
];
var paramsArrays = requestParams[0].xml;
var sign1 = SignUtils.signRequest("0BNW1x2OD6wK6c5twA1e69IFJEKWGrcK", paramsArrays);
console.log(sign1);