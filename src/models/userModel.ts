import mongoose, { Schema, Document, Types } from "mongoose"
import validator from "validator"
import { roleEnum } from "../enums/roleEnum"

export interface IUser extends Document {
  user_name: string
  email: string
  password: string
  role: roleEnum
}

const UserSchema = new Schema<IUser>({
  user_name: {
    type: String,
    minlength: [3, "username is to short!"],
    maxlength: [30, "username is to long!"],
    required: [true, "username must be provided"],
    unique: true
  },
  email: {
    type: String,
    validate: [validator.isEmail, "email must be provided in the right format"],
    required: [true, "email must be provided"],
    unique: true

  },
  password: {
    type: String,
    minlength: [4, "password is to short"],
    required: [true, "you must provid a password"]
  },
  role: {
    type: String,
    enum: ["teacher", "student"],
    required: [true, "role must be provided!"]
  }
})

export default mongoose.model<IUser>("User", UserSchema)
