const mongoose = require('mongoose');
const Event = require('./Event');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');

const clubSchema = new Schema({
   clubname: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true },
    type:{
        type:String,
        default:'club'
    }
}
,
{timestamps:true});

clubSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id, type: this.type }, 'secret', { expiresIn: '24h' });
    return token;
}

module.exports = mongoose.model('club', clubSchema);