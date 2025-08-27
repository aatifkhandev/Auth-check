import express from 'express'
import { createTodo, updateTodo } from './types.js'
const app = express()
const port = 3000
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import { todo } from "./db.js";  
import cors from "cors"


app.use(express.json())
app.use(cors())
 

app.post('/todo',async(req,res)=>{
   console.log("POST /todo hit");
  console.log("Body:", req.body);

  const createPayload = req.body
  const parsedPayload = createTodo.safeParse(createPayload)
  if(!parsedPayload.success){
    res.status(411).json({
      msg:"you sent the wrong inputs"
    })
    return
  }
//put it in mongodb
  await todo.create({
    title:createPayload.title,
    description:createPayload.description,
    completed:false
  });
  
   res.json({
    msg : "Todo created"
   })

})



app.get('/todos',async(req,res)=>{
const todos =   await todo.find({})

res.json({
  todos
})
})

app.put('/completed',async(req,res)=>{
const updatedPayload = req.body
const parsedPayload = updateTodo.safeParse(updatedPayload )
     if(!parsedPayload.success){
      res.status(411).json({
        msg:"you have sent wrong inputs"
      })
      return
     }
     await todo.updateOne({
      _id:req.body.id
     },{
      completed:true
     })
     res.json({
      msg:"Todo marked as completed"
     })
})

async function main(){
   await mongoose.connect(process.env.MONGO_URL)
   console.log("Connected to mongo");
   
   app.listen(port,()=>{
       console.log(`listening on ${port}`);
       console.log("MongoDB connected ✅");
       
   })
}

main()