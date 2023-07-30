import express from "express";

import bodyParser from "body-parser";
import auth from "./auth/auth.js";

const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/auth',auth)
app.get('/',(req,res)=>{
    res.send('srever is online! ')
})

app.listen(8000,()=>{
    console.log('server is runing on 8000');
    
})