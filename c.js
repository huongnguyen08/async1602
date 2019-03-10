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
// (2+4)*5/2
// cong(2,4)
// .then(tong => {
//     nhan(tong,5)
//     .then(tich=>{
//         chia(tich,2)
//         .then(result=>console.log(result))
//         .catch(err=>console.log(err))
//     })
//     .catch(err=>console.log(err))
// })
// .catch(err=>console.log(err))

// cong(2,4)
// .then(tong => nhan(tong,5))
// .then(tich=>chia(tich,2))
// .then(r => console.log(r))
// .catch(err=>console.log(err.message))

function tinhDienTich(a,b,h,cb){
    cong(a,b)
    .then(tong => nhan(tong,h))
    .then(tich=>chia(tich,2))
    .then(result => cb(result,null))
    .catch(err=>cb(null,err.message))
}
// tinhDienTich(2,4,5,(kq,err)=>{
//     if(err) return;
//     console.log(kq)
// })
function tinhDienTich02(a,b,h){
    return cong(a,b)
    .then(tong => nhan(tong,h))
    .then(tich=>chia(tich,2))
}
tinhDienTich02(4,5,6)
.then(result=>console.log(result))
.catch(e=>console.log(e))

 

