const express = require('express')
const axios = require('axios')
const { from } = require('rxjs')
var app = express();

//configurations
app.set('trust proxy',true);
app.enable('trust proxy');
app.set('strict routing',true)
app.set('x-powered-by',false)

app.get('/users',(req,resp) => {
    from(axios.get("http://jsonplaceholder.typicode.com/users"))
    .subscribe(response => {
        resp.send(response.data)
    })
})

app.listen(8888)