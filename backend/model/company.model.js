import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
{
    name: {
      type: String,
      required: true,
      trim: true,
    },
    website: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    logo: {
      type: String,
      default: null,
    },
    location: {
      type: String,
      default: null,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
const Company = mongoose.model("Company", companySchema);   
export default Company