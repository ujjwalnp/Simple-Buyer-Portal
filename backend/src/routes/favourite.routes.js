import express from "express";
import { getMyFavourites } from "../controllers/favourite.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/me", protect, getMyFavourites);

export default router;