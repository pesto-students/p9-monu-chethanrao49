import express from "express";
import {
  createAsset,
  deleteAsset,
  updateAsset,
} from "../controllers/assetController";
import auth from "../middlewares/auth";

const router = express.Router();

router.post("/", auth, createAsset);
router.delete("/:id", auth, deleteAsset);
router.put("/:id", auth, updateAsset);

export default router;
