import mongoose from "mongoose";

export default async function connect() {
    await mongoose.connect("mongodb://localhost:27017/quizApp")
    console.log("Database Connected")
}