const URL = 'http://localhost:3000/';
const request = require('request')

function cong(a,b){ //10 + 100
    return new Promise((resolve, reject)=>{
        if(isNaN(a) || isNaN(b))    
            return reject(new Error('Invalid parameters'))
        const fullUrl = `${URL}${a}/cong/${b}`
        request(fullUrl,(err,res,body)=>{
            if(err) return reject(err)
            return resolve(JSON.parse(body).result)
        })
    })
}
function nhan(a,b){
    return new Promise((resolve, reject)=>{
        if(isNaN(a) || isNaN(b))    
            return reject(new Error('Invalid parameters'))
        const fullUrl = `${URL}${a}/nhan/${b}`
        request(fullUrl,(err,res,body)=>{
            if(err) return reject(err)
            return resolve(JSON.parse(body).result)
        })
    })
}
function chia(a,b){
    return new Promise((resolve, reject)=>{
        if(isNaN(a) || isNaN(b))    
            return reject(new Error('Invalid parameters'))
        if(b==0) return reject(new Error('b != 0'))
        const fullUrl = `${URL}${a}/chia/${b}`
        request(fullUrl,(err,res,body)=>{
            if(err) return reject(err)
            return resolve(JSON.parse(body).result)
        })
    })
}
// (2+4)*5/2 = 6*5/2 = 30/2 = 15 
async function tinhDienTich(a,b,h){
    let tong = await cong(a,b) 
    let tich = await nhan(tong,h) 
    return await chia(tich,2) 
}
tinhDienTich(2,4,5)
.then(r=>console.log(r))
.catch(e=>console.log(e.message))