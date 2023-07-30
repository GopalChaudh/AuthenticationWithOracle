import express from 'express';
import { GetUser } from '../DB/UsersDB.js';
const loginRoute = express.Router();
loginRoute.post('/',async(req,res)=>{
    const {email, password,} = req.body;
    try{

       const hasuserInfo =  await GetUser(email, password)
       if(!hasuserInfo){
           res.status(200).json({
               status:200,
               message:'user found'
           })

       }else{
        res.status(404).json({
            status:404,
            message:'invalid username/password'
        })
       }
    }catch(err){
        res.status(501).json({
            status:501,
            message:err.message
        })
    }
})

export default loginRoute