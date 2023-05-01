//
async function resolveSample(){
    return('resolve!!');
}

resolveSample().then(value =>{
    console.log(value);
});

async function resolveSample(){
    throw new Error('reject!!');
}

rejectSample().catch(err => {
    console.log(err);
});

function resolveError(){
    return('resolveError!!');
}

resolveError().then(value =>{
    console.log(value);
});