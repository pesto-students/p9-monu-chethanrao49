import { Request, Response } from "express";
import Asset from "../models/assetModel";
import User from "../models/userModel"; // Assuming you have a UserModel
import sendEmail from "../services/emailService";

// This is a simple Asset type definition. Update it according to your schema.
interface Asset {
  user: string;
  assets: number;
  equity: number;
  fixedIncome: number;
  alternatives: number;
}

// Assuming you have a UserModel with a property "email"
interface User {
  email: string;
  _id: string;
  // Add the rest of the fields according to your schema
}

export const deleteAsset = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  const deletedAsset: Asset | null = await Asset.findByIdAndRemove(id);

  res.status(200).json(deletedAsset);
};

export const updateAsset = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { assets, equity, fixedIncome, alternatives } = req.body;

  const updatedAsset: Asset | null = await Asset.findByIdAndUpdate(
    id,
    { assets, equity, fixedIncome, alternatives },
    { new: true }
  );

  res.status(200).json(updatedAsset);
};

export const createAsset = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId, assets, equity, fixedIncome, alternatives } = req.body;

  const newAsset = new Asset({
    user: userId,
    assets,
    equity,
    fixedIncome,
    alternatives,
  });

  await newAsset.save();

  // Send email notification
  const user: User | null = await User.findById(userId);
  if (user) {
    sendEmail(
      user.email,
      "New Asset Created",
      "A new asset record has been created on your account."
    );
  }

  res.status(201).json(newAsset);
};
