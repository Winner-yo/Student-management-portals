import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
    throw new error(
        "please define MOGODB_URI environment variable inside .env<development/production>.local"
    );
}
const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);;
        console.log(`Connected to Database ${NODE_ENV} MODE `)
    } catch (error) {
        console.log("Error connecting to Database", error);
        process.exit(1);//stop running the app
    }
}

export default connectToDatabase;