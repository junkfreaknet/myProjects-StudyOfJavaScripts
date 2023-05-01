const mysql = require('mysql');

const connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'junkfreaknet',
  database:'mydb'
});

//
connection.connect((err)=>{

    if (err) throw err;
    console.log('Connected!');
});

connection.query('select * from customers',(err,rows)=>{
    
  if (err) throw err;

  console.log('data from db\n');
  console.log(rows);

});
connection.end();
//console.log('Disconnected!');

//main
console.log('Start Display');
console.log('End Display');
//connection.end();               //and close connection to database



//process.exit(0);