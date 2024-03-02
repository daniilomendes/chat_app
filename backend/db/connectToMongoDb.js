import mongoose from "mongoose";

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Conectado ao MongoDB!");
  } catch (error) {
    console.log("Erro ao conectar ao MongoDB!", error.message);
  }
};

export default connectToMongoDb;
