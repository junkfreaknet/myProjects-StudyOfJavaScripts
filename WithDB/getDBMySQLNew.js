//
var mysql=require('mysql');
const util=require('util');

function getDB(){

    return new Promise((resolve,reject) => {

        const procedure = () => {
        var pool=mysql.createPool({
            connectionLimit: 10,
            host: 'localhost',
            user: 'root',
            password: 'junkfreaknet',
            database: 'mydb'
        })

        //pool.query=util.promisify(pool.query);

    //(async()=>{
        async () => {
        try{

            //var results=pool.query('select * from customers');
            //var results=pool.query('select * from customers',function(err,results));
            //console.log(results);
            //pool.end();
         //resolve(0);
            console.log("end getting db.");
            
        } catch(err){
            console.log("error on getting db.");
            throw new Error(err);
        }
    }
        console.log("end getting db.");
        resolve(0);

    }

    setTimeout(procedure,10000);
    });
    //});
};


async function main(){
    console.log('hello world.');
    let result=await getDB();
    console.log("good by world.");
}

// do from lines below

main();