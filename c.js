const URL = 'http://localhost:3000/';
const request = require('request')

function cong(a,b){
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
cong(2,'c')
.then(result => console.log(result))
.catch(err => console.log(err.message))



// (2+4)*5/2 = 15

