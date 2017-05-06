//Setting up MySQL Connection
var mysql = require("mysql");
var connection;

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
connection.release();

//Export connection for ORM use
module.exports = connection;