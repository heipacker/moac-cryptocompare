var request = require("request");
var fs = require("fs");

request("https://f12.baidu.com/it/u=3370260265,1231552087&fm=72").pipe(fs.createWriteStream("/tmp/2")).on('close', function () {

});

request("https://f12.baidu.com/it/u=3370260265,1231552087&fm=72",
    function (err, res, data) {
        if (res.statusCode === 200) {
            var fileName = "/tmp/1";
            fs.writeFile(fileName, data, function (err) {

            });
        }
    });