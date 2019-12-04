const mongoose = require("mongoose")
const Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        required: "Must require user name"
    },
    googleId: {
      type: String, 
      required: "Must require google id"
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;
