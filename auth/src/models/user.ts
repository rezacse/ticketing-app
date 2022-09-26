import mongoose from "mongoose";
import { PasswordManager } from "../services/password-manager";

//
interface UserAttrs {
  email: string;
  password: string;
}

interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      // unique: true
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(_, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashPassword = await PasswordManager.toHash(this.get("password"));
    this.set("password", hashPassword);
  }
  done();
});
userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

// User.build({email: "d", password: 'pass'});

export { User };
