function getPattern(name) {
    return new RegExp(
        "(?:^|;) *" +
        name.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") +
        "=([^;]*)"
    )
}
var header = "id=eyJ1c2VyIjp7Im5hbWUiOiI0NjY1Mjc2ODNAcXEuY29tIn19; sails.sid=s%3AhkAjXlwvggfKUtwIfoQJkO53VL5LC9Vp.uOpgxcN7a3Bs29EyL%2B5XZwYJBXYsvVxkhBqc%2FWuel4Y; id=; id.sig=zfg5n2TwI9wO4P2ZTDMv1_q3XQ4";
var header1 = "id=; id.sig=zfg5n2TwI9wO4P2ZTDMv1_q3XQ4; id=eyJ1c2VyIjp7Im5hbWUiOiI0NjY1Mjc2ODNAcXEuY29tIn19; sails.sid=s%3AhkAjXlwvggfKUtwIfoQJkO53VL5LC9Vp.uOpgxcN7a3Bs29EyL%2B5XZwYJBXYsvVxkhBqc%2FWuel4Y";

var match = header.match(getPattern("id"));
console.log(match);

var match1 = header1.match(getPattern("id"));
console.log(match1);
