var express = require('express')
var app = express();
var Grade = require('./gradeModel')

var grades = [];

var router = express.Router();
 router.route('/')
        .get((req,res,next)=>{
            grades.forEach(x=>console.log(x));
            // res.send("read")
            res.json(grades)
        })
        .post((req,res,next)=>{
            grades.push(new Grade(Math.random(),"arun","mwa","A"))
            // res.send("written")
            res.json(grades)
        })

app.use('/grades',router);
app.listen(3000)