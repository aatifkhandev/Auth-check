// // Todo {
//    title:string,
//    description:string,
//    completed:boolean
// // }

import mongoose from "mongoose";




const TodoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todo',TodoSchema)

export{
    todo
}

