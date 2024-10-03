import express from 'express'
import connectDb from './ConnectDB.js'
import router from './routes/insert.js'
// Call function Connectdatabase
connectDb()
const app=express()
const PORT=3000
app.use(express.urlencoded({extended:true}))
app.use('/',router)
app.listen(PORT,()=>{
    console.log("Listing port on ",PORT)
})
