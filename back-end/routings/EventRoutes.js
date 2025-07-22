const express = require('express');
const router = express.Router();

const {createEvent,updateEvent,deleteEvent,getAllEvents}=require('../controllers/eventcontroller')
const {authclub} = require('../Authentication/clubauth');
const {authenticateJWT} =require('../Authentication/Auth')

router.post('/newEvent',authenticateJWT,authclub,createEvent);
router.post('/updateEvent',authenticateJWT,authclub,updateEvent);
router.post('/deleteEvent',authenticateJWT,authclub,deleteEvent);
router.get('/getAllEvents',authenticateJWT,authclub,getAllEvents);

module.exports=router;