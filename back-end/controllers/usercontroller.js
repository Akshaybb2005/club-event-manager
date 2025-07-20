const User = require('../schemas/User')
const Event = require('../schemas/Event');

const register=async(req,res)=>{
    const {name,email,password}=req.body;
    try {
        const existinguser=await User.findOne({email});
        if(existinguser)
        {
            console.log('User already exists');
            return res.status(400).json({message:"User already exists"});   
        }
        const user=await User.create({
            name,
            email,
            password
        });
        const token = user.generateAuthToken();
        user.save();
        res.status(201).json({user, token});
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Internal server error"});    
    }
}

const login=async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user=await User.findOne({email});
        if(!user)
        {
            console.log('User not found');
            return res.status(404).json({message:"User not found"});
        }
        if(user.password!==password)
        {
            console.log('Invalid credentials');
            return res.status(401).json({message:"Invalid credentials"});
        }
        const token = user.generateAuthToken();
        res.status(200).json({user,token});
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Internal server error"});
    }
}

const joinevent=async(req,res)=>{
    const {eventId,userId}=req.body;
    try {
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        event.user.push(userId);
        await event.save();
        res.status(200).json({ message: "User added to event", event });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const getallevents=async(req,res)=>{
    try {
        const events = await Event.find({});
        res.status(200).json(events);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}
const logout=async(req,res)=>{
    try {
        res.clearCookie("token");
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}
module.exports = {
    register,
    login,
    joinevent,
    getallevents
};