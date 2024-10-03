import express  from  'express'
import List_model from '../models/listmodel.js'
const router=express.Router()

router.post('/',async(req,res)=>{
   await List_model.create({
    name:req.body.name,
    weight:req.body.weight
   })
   res.json({sucess:true});
}
)
export default router