import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes";
import assetRoutes from "./routes/assetRoutes";
import financeRoutes from "./routes/financeRoutes";
import invoiceRoutes from "./routes/invoiceRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);
app.use("/asset", assetRoutes);
app.use("/finance", financeRoutes);
app.use("/invoice", invoiceRoutes);

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("OK");
});

const { PORT: PORT_ENV, MONGODB_URL: MONGODB_URL_ENV } = process.env;

const PORT = PORT_ENV || 30002;
const MONGODB_URL = MONGODB_URL_ENV || "";

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1);
  });

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception: ", error);
  process.exit(1);
});
