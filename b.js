const URL = 'http://localhost:3000/';
const request = require('request')


function cong(a,b,fn){
    // http://localhost:3000/3/cong/4
    const fullUrl = `${URL}${a}/cong/${b}`
    request(fullUrl,(err,res,body)=>{
        if(err) return fn(null,err)
        return fn(JSON.parse(body).result,null)
    })
}
function nhan(a,b,fn){
    const fullUrl = `${URL}${a}/nhan/${b}`
    request(fullUrl,(err,res,body)=>{
        if(err) return fn(null,err)
        return fn(JSON.parse(body).result,null)
    })
}
function chia(a,b,fn){
    const fullUrl = `${URL}${a}/chia/${b}`
    request(fullUrl,(err,res,body)=>{
        if(err) return fn(null,err)
        return fn(JSON.parse(body).result,null)
    })
}

// (3+4)*5/2

