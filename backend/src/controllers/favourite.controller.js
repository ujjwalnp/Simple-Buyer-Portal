import mongoose from "mongoose";
import Favourite from "../models/favourite.model.js";
import Property from "../models/property.model.js";

export const getMyFavourites = async (req, res) => {
    try {
        const favourites = await Favourite.find({ user: req.user.id }).populate("property").sort("-createdAt");
        if (favourites.length === 0) {
            return res.status(404).json({ message: "No favourites found" });
        }
        
        res.status(200).json({ favourites });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const addToFavourites = async (req, res) => {
    try {
        const { propertyId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(propertyId)) {
            return res.status(400).json({ message: "Invalid Property ID format" });
        }

        const property = await Property.findById(propertyId);
        if (!property) {
            return res.status(404).json({ message: "Property not found" });
        }

        const existingFavourite = await Favourite.findOne({ user: req.user.id, property: propertyId });
        if (existingFavourite) {
            return res.status(409).json({ message: "Property already exists in favourites" });
        }

        const favourite = await Favourite.create({ user: req.user.id, property: propertyId });
        res.status(201).json({ favourite });      
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};