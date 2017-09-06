console.time('処理時間')
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'pass',
  database : 'oreore'
});

/*connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
});*/

connection.query('SELECT * FROM `personal`', function (error, results, fields) {
  console.log(results)
})
connection.end();
console.timeEnd('処理時間')
