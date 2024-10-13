import mongoose, { Schema, Document, Types } from "mongoose";
import validator from "validator";
import { roleEnum } from "../enums/roleEnum"

export interface IUser extends Document {
  _id: Types.ObjectId;
  username: string;
  email: string;
  password: string
  role: roleEnum
}

const UserSchema = new Schema<IUser>({});

export default mongoose.model<IUser>("User", UserSchema);
