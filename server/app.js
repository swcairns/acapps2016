var express = require('express');
var app = express();
var mysql = require('mysql');
 

function execQuery(query) {

	var connection = mysql.createConnection({
	  host     : 'acapps2016.cdlyexcnfx4w.us-west-2.rds.amazonaws.com',
	  user     : 'test',
	  password : 'acapps2016',
	  database : 'innodb'
	});

	connection.connect();

	connection.query(query, function(err, rows, fields) {
	
		//if (err) return err;
		
		console.log(rows);
		
		return rows;
	});	
	
	connection.end();
};
 
app.get('/listings', function (req, res) {
	
	data = execQuery("SELECT * FROM innodb.pickup WHERE status = 'available';");

	console.log('here');
	
	return res.json({my_data: data});
});

app.get('/submit', function (req, res) {

	

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



 
