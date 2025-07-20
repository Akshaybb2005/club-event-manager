const Club=require('../schemas/Club');

const authclub=async(req,res,next)=>{
    if(req.user.type=='club'){
        const club=await Club.findById(req.user._id);
        if(!club){
            return res.status(404).json({message:"Only club can access this route"});
        }
        req.club=club;
        next();
    }else{
        return res.status(403).json({message:"Forbidden"});
    }
}

module.exports={authclub};