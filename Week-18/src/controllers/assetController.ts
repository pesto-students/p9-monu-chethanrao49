import { Request, Response } from "express";
import Asset from "../models/assetModel";
import User from "../models/userModel"; // Assuming you have a UserModel
import sendEmail from "../services/emailService";
import { IAsset, IUser } from "../../global";

export const deleteAsset = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  const deletedAsset: IAsset | null = await Asset.findByIdAndRemove(id);

  res.status(200).json(deletedAsset);
};

export const updateAsset = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { assets, equity, fixedIncome, alternatives } = req.body;

  const updatedAsset: IAsset | null = await Asset.findByIdAndUpdate(
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
  const user: IUser | null = await User.findById(userId);
  if (user) {
    sendEmail(
      user.email,
      "New Asset Created",
      "A new asset record has been created on your account."
    );
  }

  res.status(201).json(newAsset);
};
