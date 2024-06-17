const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {type:String, required: true},
    email: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    location: { type: Object, required: true},
    description: { type: String, required: true },
    number:{type:Number,required:true},
    isAdmin: {type: Boolean, required: true},
    date:{type: Date,default:Date.now,},
  },

  { timestamps: true }
);

const Users =
  mongoose.models.Users || mongoose.model("Users", UserSchema);

export default Users;

