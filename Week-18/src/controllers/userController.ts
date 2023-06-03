import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userModel";
import Asset from "../models/assetModel";

interface User {
  _id: string;
  email: string;
  password: string;
}

interface Asset {
  user: string;
  assets: number;
  equity: number;
  fixedIncome: number;
  alternatives: number;
  _id: string;
}

// user signup
export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({ email, password: hashedPassword });
    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

// user login
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const existingUser: User | null = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials." });
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

// get user assets
export const getUserAssets = async (req: Request, res: Response) => {
  const userId = req?.userId;
  const userAssets: Asset[] = await Asset.find({ user: userId });

  res.status(200).json(userAssets);
};
