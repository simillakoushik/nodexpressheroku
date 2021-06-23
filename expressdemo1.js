const express = require('express')

const app= express()

var port = process.env.PORT || 9090

app.post('/ibm',function(req,res){
    res.send('<h2>welcome to express server using post</h2>')
})
app.get('/ibm',function(req,res){
    res.send('<h2>welcome to express server using get</h2>')
})
app.put('/ibm',function(req,res){
    res.send('<h2>welcome to express server using put</h2>')
})
app.delete('/ibm',function(req,res){
    res.send('<h2>welcome to express server using delete</h2>')
})



app.listen(port,function(){
    console.log('express server started')

})