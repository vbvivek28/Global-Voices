import mongoose from "mongoose";

async function connectDb() {
    
  try {console.log("inside db file");
    mongoose.set('strictQuery', false);
    await mongoose.connect("mongodb+srv://vb-28:3sboTx56NKmJrFR1@admin-vb.q2vep73.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("connected to database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
}

export default connectDb; 
