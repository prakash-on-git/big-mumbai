import mongoose, { Schema, models } from "mongoose";
import { type } from "os";

const userSchema = new Schema(
  {
    countryCode: { type: String, },
    phoneNumber: { type: String, },
    email: { type: String},
    password: { type: String, required: true,},
    inviteCode: { type :String},
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
