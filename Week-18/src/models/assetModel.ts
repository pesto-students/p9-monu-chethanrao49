import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const assetSchema = new mongoose.Schema({
  user: { type: ObjectId, ref: "User" },
  assets: { type: Number, required: true },
  equity: { type: Number, required: true },
  fixedIncome: { type: Number, required: true },
  alternatives: { type: Number, required: true },
});

const Asset = mongoose.model("Asset", assetSchema);
export default Asset;
