import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Por favor ingrese valor"],
    lowercase: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Por favor ingrese valor"],
    lowercase: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Por favor ingrese valor"],
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
