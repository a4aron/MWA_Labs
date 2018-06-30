//using promise
const os = require('os')
function reallyCheckSystem(){
    return new Promise((resolve,reject)=>{
        var numOfCore = os.cpus().length;
        var ram = Math.ceil(os.totalmem()/(1024*1024*1024))
        if(ram < 4) 
        reject("This app needs at least 4 GB of RAM")
    else if (numOfCore < 5) 
        reject("Processor is not supported")
    else
        resolve("System is checked succesfully")
    })
}
//using Observable
const { from } = require('rxjs')
var checkSystem =  function(){
    from(reallyCheckSystem()).subscribe(
        (e)=>console.log(e),
        (e)=>console.log(e)
    )
}
checkSystem()
console.log("Checking your system...")
