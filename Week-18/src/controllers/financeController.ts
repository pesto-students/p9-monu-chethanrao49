import { Request, Response } from "express";
import Finance from "../models/financeModel";
import User from "../models/userModel";
import sendEmail from "../services/emailService";

// You will need to replace these with your actual model types
interface Finance {
  user: string;
  income: number;
  expenses: number;
  savings: number;
  month: number;
  year: number;
}

interface User {
  email: string;
  _id: string;
  // Add the rest of the fields according to your schema
}

export const getUserFinances = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId, year, month } = req.query as unknown as {
    userId: string;
    year: number;
    month: number;
  };

  const userFinances: Finance[] = await Finance.find({
    user: userId,
    year: year || { $exists: true },
    month: month || { $exists: true },
  });

  res.status(200).json(userFinances);
};

export const updateFinance = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { income, expenses, savings } = req.body;

  const updatedFinance: Finance | null = await Finance.findByIdAndUpdate(
    id,
    { income, expenses, savings },
    { new: true }
  );

  // Send email notification
  if (updatedFinance) {
    const user: User | null = await User.findById(updatedFinance.user);
    if (user)
      sendEmail(
        user.email,
        "Finance Record Updated",
        "Your finance record has been updated."
      );

    res.status(200).json(updatedFinance);
  }
};

export const createFinance = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId, income, expenses, savings, month, year } = req.body;

  const newFinance = new Finance({
    user: userId,
    income,
    expenses,
    savings,
    month,
    year,
  });

  await newFinance.save();

  // Send email notification
  const user: User | null = await User.findById(userId);

  if (user)
    sendEmail(
      user.email,
      "New Finance Record Created",
      "A new finance record has been created on your account."
    );

  res.status(201).json(newFinance);
};
