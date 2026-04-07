import Property from "../models/property.model.js";
import properties from "./data/properties.data.js";

const seedProperties = async () => {
    try {
        const existingCount = await Property.countDocuments();
        if (existingCount > 0) {
            console.log("Properties already exist, Skipping seed");
            return;
        }

        await Property.insertMany(properties);

        console.log("Properties seeded successfully");
    } catch (err) {
        console.error("Error seeding properties:", err);
    }
};

export default seedProperties;