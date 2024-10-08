import mongoose from "mongoose"

export const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to mongo db");
    } catch (error) {
        console.log(error);
        
    }
}
