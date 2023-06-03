import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const financeSchema = new mongoose.Schema({
  user: { type: ObjectId, ref: "User" },
  income: { type: Number, required: true },
  expenses: { type: Number, required: true },
  savings: { type: Number, required: true },
  month: { type: Number, required: true },
  year: { type: Number, required: true },
});

const Finance = mongoose.model("Finance", financeSchema);
export default Finance;
