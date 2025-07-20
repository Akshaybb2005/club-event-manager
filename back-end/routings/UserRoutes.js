const express= require('express');
const router=express.Router();
const {register,login,joinevent,getallevents}=require('../controllers/usercontroller');

router.post('/register' ,register);
router.post('/login',login);
router.post('/joinevent',joinevent);

router.get('/events',getallevents);
module.exports=router;