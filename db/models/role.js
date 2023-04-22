import mongoose from "mongoose";

// Schema für Role der Users
const RoleSchema = new mongoose.Schema({
  value: { type: String, unique: true, default: "USER" },
});

const Role = mongoose.models.Role || mongoose.model("Role", RoleSchema);
export default Role;
