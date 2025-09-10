import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import bcrypt from 'bcrypt';

const router = express.Router();
const ADMIN_ID = process.env.ADMIN_ID;
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;

router.get('/login',(req,res)=>{
  const { userid, password } = req.body;
  const comparePassword = bcrypt.compareSync(password, ADMIN_PASSWORD_HASH as string);
  
  if(userid === ADMIN_ID && comparePassword){
    req.session.user = { userid, role: "admin" };
    res.status(200).json({ message: 'Login successful' });
  }else{
    res.status(401).json({ message: 'Login failed' });
  }
  
});

router.get('/logout',(req,res)=>{
  req.session.destroy((err)=>{
    if(err){
        res.status(500).json({ message: 'Logout failed' });
    }else{
        res.clearCookie("connect.sid"); // 세션 쿠키 삭제   
        res.status(200).json({ message: 'Logout successful' });
    }
  });
});

export default router;