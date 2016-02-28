var express = require('express');
var app = express();
var mysql = require('mysql');
 

function execQuery(query, res) {

	var connection = mysql.createConnection({
	  host     : 'acapps2016.cdlyexcnfx4w.us-west-2.rds.amazonaws.com',
	  user     : 'test',
	  password : 'acapps2016',
	  database : 'innodb'
	});

	connection.connect();

	console.log(query);
	
	connection.query(query, function(err, rows, fields) {
	
		//if (err) return err;
		
		console.log(rows);
	
		res.send({listings: rows});
	});	
	
	
	
	connection.end();
};
 
app.get('/listings', function (req, res) {
	
	res.setHeader('Content-Type', 'application/json');
	
	data = execQuery("SELECT * FROM innodb.pickup WHERE status='available';", res);
});

app.get('/organization/listings', function (req, res) {

	res.setHeader('Content-Type', 'application/json');

	data = execQuery("SELECT * FROM innodb.pickup WHERE organization_id=" + req.query.id, res);
});


app.get('/submit', function (req, res) {
	
	
	

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



 
