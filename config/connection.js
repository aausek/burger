//Setting up MySQL Connection
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
	} else {
		connection = mysql.createConnection({
		port: 3306,
		host: "localhost",
		user: "root",
		password: "",
		database: "burgers_db"
	});
};

//Make connection
connection.connect(function (err) {
	if (err) {
		console.error("Error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

connection.connect();
//Export connection for ORM use
module.exports = connection;