import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://luisohidalgovazquez:dominic06@cluster0.7rcgfy8.mongodb.net//login";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connect mongoDB");
  } catch (err) {
    console.log(err);
  }
};
