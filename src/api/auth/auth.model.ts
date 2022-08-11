import mongoose from "mongoose";
import { UserSchema } from "./auth.schema";

const User = mongoose.model("User" , UserSchema);

export { User }