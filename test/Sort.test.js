var paramsArrays = [
    {
        appid: 'FAIL'
    },
    {
        nonce_str: "323"
    },
    {
        mch_id: "mch_id"
    }];
var sortedParams = paramsArrays.sort(function (a, b) {
    return Object.keys(a)[0] > Object.keys(b)[0];
});

console.log(sortedParams);