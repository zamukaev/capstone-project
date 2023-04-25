import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: { type: String, ref: "Role" },
  avatarUrl: String,
  years: Number,
  status: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
