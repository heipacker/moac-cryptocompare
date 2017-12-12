var PushRequest = require("../modules/common/PushRequest");

PushRequest.pushUserid(1, "test", function (err, result) {
    console.log(result);
});

PushRequest.pushRoom(23, "test", function (err, result) {
    console.log(result);
});