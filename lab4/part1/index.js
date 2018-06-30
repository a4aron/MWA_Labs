const { Subject } = require('rxjs');
const { fork } = require('child_process');
var subject  = new Subject();

function responseHandler(reqresp){
    reqresp.res.end('hi')
}
subject.subscribe(responseHandler)
const http = require('http');
http.createServer((req,res)=>{
    subject.next({req: req, res : res})
}).listen(8888);
