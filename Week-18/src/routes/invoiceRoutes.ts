import express from "express";
import {
  uploadInvoice,
  getInvoices,
  deleteInvoice,
  updateInvoice,
} from "../controllers/invoiceController";
import auth from "../middlewares/auth";
import multer from "multer";

const upload = multer();

const router = express.Router();

router.post("/", auth, upload.single("invoice"), uploadInvoice);
router.get("/", auth, getInvoices);
router.delete("/:id", auth, deleteInvoice);
router.put("/:id", auth, upload.single("invoice"), updateInvoice);

export default router;
