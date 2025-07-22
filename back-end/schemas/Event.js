const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userschema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
         type:String,
        required:true
    }
})

const eventSchema = new Schema({
    clubId: { type: String, required: true },
    name: { type: String, required: true},
    description: { type: String, required: true},
    date: { type: String, required: true },
    time: { type: String, required: true},
    venue: { type: String, required: true},
    completed: { type: Boolean, default: false },
    user:[
        userschema
    ]
    
}
,
{timestamps:true});

module.exports = mongoose.model('event', eventSchema);