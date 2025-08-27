// // Todo {
//    title:string,
//    description:string,
//    completed:boolean
// // }

const mongoose = require('mongoose')




const TodoSchema = mongoose.Schema({
    title:string,
    description:string,
    completed:boolean
})

const todo = mongoose.model('todo',TodoSchema)

module.exports={
    todo
}

