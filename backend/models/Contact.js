import mongoose from "mongoose";

const connectSchema = new mongoose.Schema({
  fulname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone:{
    type: String,
    required: true,
  },
  area:{
    type: String,
    required: true,
  }},{ timestamps: true });

const Contact = mongoose.model("Contact", connectSchema);

export default Contact;

