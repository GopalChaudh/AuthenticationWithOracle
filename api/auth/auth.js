import express from 'express';
import register from './register.js';
import loginRoute from './Login.js';

const auth = express.Router();

auth.use('/register',register)
auth.use('/login',loginRoute)

export default auth