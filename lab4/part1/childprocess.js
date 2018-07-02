const fs = require('fs')
// const path = require('path')
const readOperation = (filename) =>{
    var folders = filename.split('/');
    var changeUri = (folders.join('\\'))
    // return __dirname+`\\${changeUri}` ;
    var l = fs.readFileSync(`./${changeUri}`,{encoding : 'utf8'})
    console.log(l)
    return l;
    // fs.readFile(`./${changeUri}`,(err,content)=>{
    //     if(!err)
    //          return content
    //     else return err;
    // });
    
}

process.on('message',(filename)=>{
    console.log("in child process")
    var processeddata = readOperation(filename);
    console.log(processeddata)
    process.send(processeddata);
})

