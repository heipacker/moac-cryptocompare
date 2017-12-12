var encodeStr = 'eyJ1c2VyIjp7Im5hbWUiOiI0NjY1Mjc2ODNAcXEuY29tIn19';

var body = new Buffer(encodeStr, 'base64').toString('utf8');
var json = JSON.parse(body);
console.log(body);

var pattern = new RegExp(
    "(?:^|;) *" +
    'id'.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") +
    "=([^;]*)"
);

match = 'id=eyJ1c2VyIjp7Im5hbWUiOiI0NjY1Mjc2ODNAcXEuY29tIn19; id.sig=ALXhaBXF8yAW6FA2ivhDfHMtmWY'.match(pattern);
if (match) {
    console.log(match[1]);
}

