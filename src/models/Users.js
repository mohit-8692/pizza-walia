import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
    MobNumber:{type:Number, required: false },
    isAdmin: { type: Boolean, default: false },
    date: {
      type: Date,
      default: Date.now,
    },
  },

  { timestamps: true }
);

const Users = mongoose.models.Users || mongoose.model("Users", userSchema);

export default Users;