

var express = require('express');
var router = express.Router();
var db=require('/server/dbService');
// other routes also appear here
// this script to fetch data from MySQL databse table
router.get('/home', function(req, res, next) {
    var sql='SELECT * FROM patient_records';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('/home', { title: 'User List', userData: data});
  });
});
module.exports = router;
