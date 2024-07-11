import mongoose from "mongoose";
import { configDotenv } from "dotenv";
const dbURI = "mongodb+srv://prsnn_shk:prasanna123@cluster0.rlflov1.mongodb.net/";
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = mongoose.connection;

  db.on('connected', () => {
    console.log('Mongoose default connection open to ' + dbURI);
  });
  
  db.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
  });
  
  db.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
  });
    