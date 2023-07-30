import express from 'express';
import { insertUser } from '../DB/UsersDB.js';
import bcrypt from 'bcrypt';
const router = express.Router();

router.post('/',async(req,res)=>{
    const {id, name, email, password, timeStamp} = req.body;
    const hashPassword = await bcrypt.hash(password,10);
    try{

        await insertUser(id, name, email, hashPassword, timeStamp)
        res.json({
            status:200,
            message:'succesfully uploaded'
        })
    }catch(err){
        res.json({
            status:501,
            message:err.message
        })
    }
})

export default router;