import Property from "../models/property.model.js";

export const getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        if (properties.length === 0) {
            return res.status(404).json({ message: "No properties found" });
        }

        res.status(200).json({ properties });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};