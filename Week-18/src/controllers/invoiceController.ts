import { Request, Response } from "express";
import multer, { FileFilterCallback } from "multer";
import Invoice from "../models/invoiceModel";

const upload = multer({ dest: "uploads/" });

// Define your Invoice interface here
interface Invoice {
  user: string;
  invoice: Buffer;
  _id: string;
}

export const uploadInvoice = async (
  req: Request,
  res: Response
): Promise<void> => {
  const invoiceFile = req.file;
  const userId = req.userId;

  const newInvoice = new Invoice({
    user: userId,
    invoice: invoiceFile?.buffer,
  });

  await newInvoice.save();

  res.status(201).json(newInvoice);
};

export const createInvoice = async (
  req: Request,
  res: Response
): Promise<void> => {
  const invoiceFile = req.file;
  const userId = req?.userId;

  const newInvoice = new Invoice({
    user: userId,
    invoice: invoiceFile?.buffer,
  });

  await newInvoice.save();

  res.status(201).json(newInvoice);
};

export const getInvoices = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.query as { userId: string };

  const invoices: Invoice[] = await Invoice.find({
    user: userId,
  });

  res.status(200).json(invoices);
};

export const deleteInvoice = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  const deletedInvoice: Invoice | null = await Invoice.findByIdAndRemove(id);

  res.status(200).json(deletedInvoice);
};

export const updateInvoice = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const invoiceFile = req.file;

  const updatedInvoice: Invoice | null = await Invoice.findByIdAndUpdate(
    id,
    { invoice: invoiceFile?.buffer },
    { new: true }
  );

  res.status(200).json(updatedInvoice);
};
