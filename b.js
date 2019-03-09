const URL = 'http://localhost:3000/';
const request = require('request')


function cong(a,b,fn){
    // http://localhost:3000/3/cong/4
    if(isNaN(a) || isNaN(b)) return fn(null,new Error('Invalid parameters'))
    
    const fullUrl = `${URL}${a}/cong/${b}`
    request(fullUrl,(err,res,body)=>{
        if(err) return fn(null,err)
        return fn(JSON.parse(body).result,null)
    })
}
function nhan(a,b,fn){
    if(isNaN(a) || isNaN(b)) return fn(null,new Error('Invalid parameters'))

    const fullUrl = `${URL}${a}/nhan/${b}`
    request(fullUrl,(err,res,body)=>{
        if(err) return fn(null,err)
        return fn(JSON.parse(body).result,null)
    })
}
function chia(a,b,fn){
    if(isNaN(a) || isNaN(b)) return fn(null,new Error('Invalid parameters'))

    const fullUrl = `${URL}${a}/chia/${b}`
    request(fullUrl,(err,res,body)=>{
        if(err) return fn(null,err)
        return fn(JSON.parse(body).result,null)
    })
}

// (2+4)*5/2 = 15

cong(2,'cs',(tong,err)=>{
    if(err) return console.log(err.message)
    nhan(tong,5,(tich,err)=>{
        if(err) return console.log(err.message)
        chia(tich,2,(result,err)=>{
            if(err) return console.log(err.message)
            console.log(result)
        })
    })
})
