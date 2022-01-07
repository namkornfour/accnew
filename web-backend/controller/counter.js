const router = require('express').Router();
const localIpUrl = require('local-ip-url');

const db = require('../db');

router.get('/', (req, res) => {
	let sql = 'select * from counter';
	db.query(sql, (error, results) => {
		if(error){
			throw error;
		}
		res.json(results);
	})
})

router.post('/add', (req, res) => {
	let sql = "insert into counter(hostname,workdate) values(?,?)";
	// let hostname = req.query.hostname;	
	let hostname = localIpUrl('public');
	db.query(sql, [hostname, new Date()], (err, result) => {
		if(err) throw err;
		res.send('succeed');
	});
});

router.put('/update', (req, res) => {
	let sql = "update counter set hostname=?,workdate=? where id=?";
	let hostname = req.query.hostname;
	let id = req.query.id;
	db.query(sql, [hostname, new Date(), id], (err, result) => {
		if(err) throw err;
		res.send('succeed');
	});
});

router.delete('/delete', (req, res) => {
	let sql = "delete from counter where id=?";
	db.query(sql,[req.query.id],(err, result)=>{
		if (err) throw err;
		res.send("deleted");
	});
});

router.get('/count', (req, res) => {
	//let sql = "select count(id) as total from counter";	
	let sql = "select count(hostname) as total from counter";	
	db.query(sql, (err, result) => {
		if (err) throw err;
		res.send(result);		
	});
})

router.get('/ip', (req, res) => {	
	 let sql = "select count(hostname) as total from counter where hostname=?";	
	let hostname = localIpUrl('public');
	db.query(sql, [hostname], (err, result) => {
		if(err) throw -1;
		res.send({'count' : result[0].total});
	});
})

module.exports = router;