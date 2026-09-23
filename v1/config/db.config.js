import mongoose from "mongoose";
import dns from "dns";

// Node's built-in resolver sometimes fails SRV lookups on Windows even when the OS DNS works
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
};

export default connectDB;