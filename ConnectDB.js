import mongoose from 'mongoose'
 const URL="mongodb://localhost:27017/Todolist";
const connectDb= async()=>{
 try{
    await mongoose.connect(URL)
    console.log("mongodb connect")
 }
 catch(error){
    console.error(error);
 }
}
export default connectDb