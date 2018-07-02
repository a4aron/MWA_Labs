const fs = require('fs')
const readOperation = (filename) =>{
    var folders = filename.split('/');
    var changeUri = (folders.join('\\'))
    var data = fs.readFileSync(`./${changeUri}`,{encoding : 'utf8'})
    return data;
    // fs.readFile(`./${changeUri}`,{encoding : 'utf8'},(err,content)=>{
    //     if(!err)
    //          return content.toString()
    //     else throw err;
    // });
}

process.on('message',(filename)=>{
    console.log("in child process")
    var processeddata = readOperation(filename);
    // console.log(processeddata)
    process.send(processeddata);
})

