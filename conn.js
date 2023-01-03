var mysql = require("mysql");
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mailarappa@8321",
    database: "collegename"
});
//connect to database
conn.connect(function(err) {
    if (err) { throw err; }

    console.log("mySql is connected..");
})

module.exports = conn;