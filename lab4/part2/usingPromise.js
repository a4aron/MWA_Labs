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
var checkSystem =  function(){
    console.log("Checking your system...")
    reallyCheckSystem()
    .then(msg => console.log(msg))
    .catch(err => console.log(err))
}
checkSystem();

//using EventEmitter
/*
'use strict';
const os = require('os')
const EventEmitter = require('events')

class CheckSystem extends EventEmitter{
    constructor(){
        super()
        this.systemspec = {cores : os.cpus().length, ram : Math.ceil(os.totalmem()/(1024*1024*1024))}
    }

    check(){
         this.emit("check")
        const ram = this.systemspec.ram;
        const numOfCore = this.systemspec.cores;
        if(ram < 4) 
            console.log("This app needs at least 4 GB of RAM")
        else if (numOfCore < 2) 
            console.log("Processor is not supported")
        else
            console.log("System is checked succesfully")
        console.log("\nYour System:")
        this.display();
    }
    display(){
         console.log(`Num of CPU cores : ${this.systemspec.cores}  Memory: ${this.systemspec.ram}GB`)
     }
}

var checksystem = new CheckSystem();
checksystem.on("check",()=>console.log("Checking your system..."))
checksystem.check(); */