import Favourite from "../models/favourite.model.js";

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