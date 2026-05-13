import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    username: { type: String, unique: true },
});
const User = mongoose.model('User', userSchema);
export default User;