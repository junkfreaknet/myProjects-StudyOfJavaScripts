const mysql = require('mysql');



//
main=()=>{
  console.log('START!!');
  (async()=>{

    const connection=mysql.createConnection({
      host:'localhost',
      user:'root',
      password:'junkfreaknet',
      database:'mydb'
    });
    


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
