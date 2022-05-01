const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min:3,
        max:20,
        unique: true,
    },
    email:{
        type: String,
        require: false,
    },
    password:{
        type: String,
        require: true,
        min: 3,
        max:20,
    },
},
{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);