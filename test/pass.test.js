var hash = require('../pass').hash;

hash('fupan1990', function (err, salt, hashValue) {
    console.log(salt);
    console.log("-----------------------------");
    console.log(hashValue);
    hash('fupan1990', 'Ojx/bwwsat/65+f4UrdAv4Jp91Hs7xFjEDBdkHkDAVBmn6JCNwvK/YV1nM0A14u7lb1Gh3+vdhTUag8mSn+X3kaM6pHmeT7hq9jTmqYkgzbG8Z7IpfAvIupgQbn1qBmeqFg7BmeOcyCLiqmg5m9uzSMghKyAlwJqkrfjeubE5wE=', function (err, hashValue1) {
        console.log("-----------------------------");
        console.log(hashValue1);
    })
});