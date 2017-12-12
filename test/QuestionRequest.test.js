var xss = require('xss');
var html2 = '<div>hello</div></div><p>hello</p><b>hello</b><script>alert(/xss/);</script>end';
var html  = xss(html2, {
    allowCommentTag: true,
    stripIgnoreTag: true
});

console.log(html);

var html1 = xss(html2, {
    whiteList: [],        // empty, means filter out all tags
    stripIgnoreTag: true,      // filter out all HTML not in the whilelist
    stripIgnoreTagBody: ['script'] // the script tag is a special case, we need to filter out its content
});
console.log(html1);