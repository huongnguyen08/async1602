const request = require('request')
const URL = 'https://chain.so/api/v2/get_address_balance/BTC/';

function getBalance(address,fn){
    request(URL+address,(err,res,body)=>{
        if(err) return fn(null,err.message)
        const result = JSON.parse(body)
        return fn(result.data.confirmed_balance,null)
    })
}

getBalance('1NTxf1H9PoWCUWnKcdfLtFtgGWxRmWWq83',(result,error)=>{
    if(error) return console.log(error)
    console.log(result)
})


// console.log(a())
// function a(){
//     console.log(1)
//     return 3
// }
/**
 * 1NTxf1H9PoWCUWnKcdfLtFtgGWxRmWWq83
 * 19Li3BpAigvtv2Z9ce4B5WwjXixfwqkgVy
 * 18cBEMRxXHqzWWCxZNtU91F5sbUNKhL5PX
 * 1CK6KHY6MHgYvmRQ4PAafKYDrg1ejbH1cE
 * 1H4o9Mh7HyjPa46z4vtv7J8yzaK5RY4bXR
 */