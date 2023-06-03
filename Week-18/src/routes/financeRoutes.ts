import express from "express";
import {
  getUserFinances,
  createFinance,
  updateFinance,
} from "../controllers/financeController";
import auth from "../middlewares/auth";

const router = express.Router();

router.get("/", auth, getUserFinances);
router.post("/", auth, createFinance);
router.put("/:id", auth, updateFinance);

export default router;
