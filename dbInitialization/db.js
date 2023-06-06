// const mongoose = require('mongoose');
// // require('dotenv').config();
const mongo_URL =  "mongodb+srv://fahaan:fahaan@cluster0.kx9uk.mongodb.net/?retryWrites=true&w=majority"
// mongoose.connect(mongo_URL).then(
//     () => {
//         console.log('connected to database');
//     }
// )
//     .catch((err) => {
//         console.log(`Could not connect to db ` + err);
//     })


const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connect to MongoDB using the connection string
    await mongoose.connect(mongo_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
