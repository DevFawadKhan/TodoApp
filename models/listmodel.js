import mongoose from 'mongoose'
const ListSchema=mongoose.Schema({
    name:{
        type:String,
         required:true
    },
    weight:{
        type:String,
        required:true
    }
})
const List_model=mongoose.model("list",ListSchema)
export default List_model