const router = require('express').Router();
const db = require('../db');

router.get('/', (req, res) => {
	let sql = "select * from counter order by id";
	db.query(sql,(err, results) => {
		if(err) throw err;
		res.send(results);
	});
});

module.exports = router;