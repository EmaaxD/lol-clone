import mongoose from "mongoose";

const URI_MONGO = process.env.URI_MONGO;

const connectDB = async () => {
  try {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(URI_MONGO, opts);

    console.log("mongo conected :D");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
