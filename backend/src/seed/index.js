import seedProperties from "./seedProperties.js";
import connectDB from "../config/db.js";
import dotenv from "dotenv";

dotenv.config();

const runSeed = async () => {
    try {
        await connectDB();
        await seedProperties();
        process.exit(0);
    } catch (err) {
        console.error("Error running seed:", err);
        process.exit(1);
    }
};

runSeed();