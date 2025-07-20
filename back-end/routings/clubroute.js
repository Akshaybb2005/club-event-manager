const express= require('express');
const router=express.Router();
const {register,login,getallevents}=require('../controllers/clubcontroller');

router.post('/register',register);
router.post('/login',login);
router.post('/getallevents',getallevents);

 module.exports=router;