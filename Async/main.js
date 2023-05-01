function AFunction(){

    return new Promise((resolve,reject) => {
        const procedure = () => {
            console.log("heavy");
            resolve(0);
        }
        setTimeout(procedure,10000);
        //console.log("end.");        
    })
}

async function middle() {
    
    let result= await AFunction();
    console.log("end.");
}
//do from below lines

console.log("start.");
middle();
//console.log("end.");