var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: { type: String, unique: true },
    email: String,
    profile_pic: String,
    bio: String,
    hashed_password: String
});
mongoose.model('UserCreative', UserSchema);
