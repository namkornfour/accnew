const mysql = require('mysql');

const db = mysql.createConnection({	
	host: 'localhost',
	//host: '103.154.94.55',
	user: 'accnewco_root',
	password: 'tr87AC',
	database: 'accnewco_acctax'	
});

db.connect((err) => {
	if(err) {
		console.log(err);		
	}
	console.log('Connected to Mysql Server');
});

module.exports = db;