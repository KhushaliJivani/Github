import express from 'express'


const port=5000
const app = express()

app.get('/data',async(req,res)=>{
    res.send('request...............................Here is a request',req)
    console.log(req);        
})

app.listen(port,()=>{
    console.log("server is listen on port.",port)
})
