var mysql=require('mysql2');

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
   password:'junkfreaknet' ,
   database:'mydb'
});

con.connect(function(err){
    if(err) throw err;
    console.log('connected!');
})

con.connect(function(err){
    if(err) throw err;
    con.query("select * from customers",function(err,result,fields){
        if(err) throw err;
        console.log(result);
        con.end();
  
    })
})

//con.end();