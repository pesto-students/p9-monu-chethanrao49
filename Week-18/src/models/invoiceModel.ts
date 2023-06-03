import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const invoiceSchema = new mongoose.Schema({
  user: { type: ObjectId, ref: "User" },
  invoice: { type: Buffer },
});

const Invoice = mongoose.model("Invoice", invoiceSchema);
export default Invoice;
