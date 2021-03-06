const express = require('express')
const axios = require('axios')
var app = express();

//configurations
app.set('trust proxy',true);
app.enable('trust proxy');
app.set('strict routing',true)
app.set('x-powered-by',false)

app.get('/users',(req,resp) => {
    var getUserJSON = async function (){
        try{
            const response = await axios.get("http://jsonplaceholder.typicode.com/users");
            resp.send(response.data)
        }
        catch(err){
            console.log(err)
        }
    }
    getUserJSON();
})
app.listen(8888)