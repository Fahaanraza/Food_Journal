import { AppRegistry } from 'react-native';
import App from './App'; // or the appropriate path to your app component

AppRegistry.registerComponent('Food_Journal', () => App);

const express = require('express');
const connectDB = require('./dbInitialization/db'); // Import the connectDB function

const app = express();

// ... Rest of your application code

// Call the connectDB function to establish the MongoDB connection
connectDB()
  .then(() => {
    // Start your server once the connection is established
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  });
