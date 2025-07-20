const mongoose = require('mongoose');
const jwt= require('jsonwebtoken');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true },
    type: {
        type:String ,
        default:"user"
    },
    
},
{ timestamps: true });

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id, type: this.type }, 'secret', { expiresIn: '24h' });
    return token;
}

module.exports = mongoose.model('users', userSchema);