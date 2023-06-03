import express from "express";
import { getUserAssets, login, signup } from "../controllers/userController";
import auth from "../middlewares/auth";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/assets", auth, getUserAssets);

export default router;
