const mysql = require('mysql');



//
main=()=>{
  (async()=>{

    const connection=mysql.createConnection({
      host:'localhost',
      user:'root',
      password:'junkfreaknet',
      database:'mydb'
    });
    
    console.log('START!!');

    connection.connect((err)=>{
      if (err) throw err;
      console.log('Connected!');
    });
    
    console.log('data from db\n');
    connection.query('select * from customers',(err,rows)=>{
    
      if (err) throw err;

      console.log(rows);
    });

    connection.end();
    console.log('END!!');

  })();
}

main();
