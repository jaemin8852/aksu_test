var express = require('express');
const { settings } = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/connectsql', function(req,res,next){
    var db_config = require('../.settings')
    const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : db_config.host,
  user     : db_config.user,
  password : db_config.password,
  database : db_config.database
});

connection.connect();

connection.query('SELECT * from Users', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();
});


//register
router.post('/register', function(req, res, next) {
    console.log(req.body);
    res.end();
  });

module.exports = router;
