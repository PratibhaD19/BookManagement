const userModel = require("../Models/userModel")


const userRegister=async function(req,res){

try{

let data=req.body

let{title,name,phone,email,password}=data
if(Object.keys(data).length==0){
     return res.status(400).send({msg:"provide data"})
    }

if(!phone) return res.status(400).send({msg:"provide phone"})
const uniqMobile= await userModel.findOne({phone})
if(uniqMobile)return res.status(400).send({msg:"phone already exist"})

if(!email) return res.status(400).send({msg:"provide email"})
const uniqEmail= await userModel.findOne({email})
if(uniqEmail)return res.status(400).send({msg:"email already exist"})


const storeData=await userModel.create(data)
return res.status(201).send({data:storeData})

}
catch(error)
}