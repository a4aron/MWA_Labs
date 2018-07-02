const { Subject } = require('rxjs');
const { fork } = require('child_process');
const url = require('url')
var subject  = new Subject();

function responseHandler(reqresp){
    let req = reqresp.req;
    let res = reqresp.res;
    let urlObj = url.parse((req.url),true);
    // console.log(urlObj.query.url)
    const childProcess = fork('childprocess.js')
    childProcess.send(urlObj.query.url);
    childProcess.on('message',msg=>{
        // res.send("response from child")
        res.writeHead(200,{'content-type':'text/plain'})
        res.end(msg);
    })
   
}
subject.subscribe(responseHandler,(err)=>console.log(err))
const http = require('http');
http.createServer((req,res)=>{
    subject.next({req: req, res : res})
}).listen(8888);
