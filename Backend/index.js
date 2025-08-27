const express = require('express')
const { createTodo, updateTodo } = require('./types')
const app = express()
const port = 3000

app.use(express.json())
 

app.post('/todo',(req,res)=>{

  const createPayload = req.body
  const parsedPayload = createTodo.safeParse(createPayload)
  if(!parsedPayload){
    res.status(411).json({
      msg:"you sent the wrong inputs"
    })
    return
  }



})



app.get('/todo',(req,res)=>{
  console.log("Hi");
  res.send({
    msg:"Hi"
  })
})

app.put('/completed',(req,res)=>{
const updatedPayload = req.body
const parsedPayload = updateTodo.safeParse(updatedPayload )
     if(!parsedPayload){
      res.status(411).json({
        msg:"you have sent wrong inputs"
      })
     }
})

app.listen(port,()=>{
    console.log(`Listening on ${port}`);
    
})