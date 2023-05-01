const mysql = require('mysql');

function getAndDisplay(){
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
  return 0;
}
//console.log('Disconnected!');

//main
let num;
console.log('Start Display');
num=await getAndDisplay();
console.log('End Display');
//connection.end();               //and close connection to database



//process.exit(0);