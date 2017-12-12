var qs = require('querystring');
var tplValue = {
    '#code#': '1234',
    '#hour#': '2分钟'
};

console.log(qs.escape(qs.stringify(tplValue)));