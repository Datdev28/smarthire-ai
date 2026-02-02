import mongoose from 'mongoose';
export const connectDB = async() => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connect database success: ${conn.connection.host}`);
  } catch (error) {
    console.error(`An error has occurred: ${error.message}`);
    process.exit(1);
  }
}