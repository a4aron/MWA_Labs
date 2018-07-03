const express = require('express')
const mongoclient = require('mongodb').MongoClient
const crypto = require('crypto');
const app = express();

app.get('/secret',(req,resp)=>{
    mongoclient.connect('mongodb://127.0.0.1:27017/homework',(err,client)=>{
    if(err) throw err;
    const db = client.db('homework')
    //read data
    db.collection('homework7').find({},(err,data)=>{
        if(err) throw err;
       data.next()
       .then(x=>{
           var decipher = crypto.createDecipher('aes-256-cbc', "asaadsaad");
           var decrypted = decipher.update(x.message, 'hex', 'utf-8');
           decrypted += decipher.final('utf-8');
        //    console.log(decrypted)
           resp.send(decrypted);
        })
       .catch(e => console.log(e))
        client.close();
    })
})
})
app.listen(8888)