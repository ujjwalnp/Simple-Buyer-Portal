import express from "express";
import { getMyFavourites, addToFavourites, removeFromFavourites } from "../controllers/favourite.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/me", protect, getMyFavourites);
router.post("/:propertyId", protect, addToFavourites);
router.delete("/:propertyId", protect, removeFromFavourites);

export default router;