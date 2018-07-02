const express = require('express')
const axios = require('axios')
var app = express();

//configurations
app.set('trust proxy',true);
app.enable('trust proxy');
app.set('strict routing',true)
app.set('x-powered-by',false)

app.get('/users',(req,resp) => {
    axios.get("http://jsonplaceholder.typicode.com/users")
    .then(response => {
        resp.send(response.data)
    })
    .catch(err => resp.send(err))
})

app.listen(8888)