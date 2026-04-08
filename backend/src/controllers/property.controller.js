import Property from "../models/property.model.js";

export const getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json({ properties });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};