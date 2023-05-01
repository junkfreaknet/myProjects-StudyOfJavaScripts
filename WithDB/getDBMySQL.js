//
var mysql=require('mysql');
const util=require('util');

var pool=mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'junkfreaknet',
    database: 'mydb'
})

pool.query=util.promisify(pool.query);

(async()=>{
try{

    var results=pool.query('select * from customers');
    console.log(results);
    pool.end();

} catch(err){

    throw new Error(err);
}

console.log(results);

});


console.log('hello world.')