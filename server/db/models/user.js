const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        name: { type: String, required: true }, 
        email: { //need to validate email
            type: String, 
            required: true, 
            unique: true 
        },
        password: { type: String }, //need to validate
        token: [{ type: String, required: true }],
        avatar: { type: String },
        location: { type: String },
        venueName: { type: Boolean, default: false },
        djName: { type: Boolean, default: false }
    }
);

const User = mongoose.model("User", UserSchema);
module.exports = { User };