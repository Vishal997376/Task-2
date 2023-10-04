const mongoose = require("mongoose")


const userSchema = new mongoose.Schema(
  {
    
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    
    email: {
      type: String,
      required: true,
      trim: true,
    },
    mobilNo:{
        type: String,
        required:true,

    },

    
    password: {
      type: String,
      required: true,
    },
    
  
    active: {
      type: Boolean,
      default: true,
    },
    
    additionalDetails: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Profile",
    },
   
    token: {
      type: String,
    },
   
   


  },
  { timestamps: true }
)


module.exports = mongoose.model("user", userSchema)
