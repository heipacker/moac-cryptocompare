var neo4j = require('../modules/common/Neo4j');
var session = neo4j.session();
session
    .run("CREATE (a:Person {name: {name}, title: {title}})", {name: "Arthur", title: "King"})
    .then(function () {
        return session.run("MATCH (a:Person) WHERE a.name = {name} RETURN a.name AS name, a.title AS title",
            {name: "Arthur"})
    })
    .then(function (result) {
        var records = result.records;
        for (var i = 0; i < records.length; ++i) {
            var record = records[0];
            console.log(record.get("title") + " " + record.get("name"));
        }
        session.close();
    });