const express = require('express')
const app = express()
const port = 3000

app.use(express.json())


app.post('/todo',(req,res)=>{

})

app.get('/todo',(req,res)=>{
  console.log("Hi");
  res.send({
    msg:"Hi"
  })
})

app.put('/completed',(req,res)=>{

})

app.listen(port,()=>{
    console.log(`Listening on ${port}`);
    
})