// database/firebaseDb.js
import { initializeApp } from "firebase/app"
const firebaseConfig = {
    apiKey: "AIzaSyB-6jGTtWTpxlhoIn6EqFZUd0FNg7xxpuo",
    authDomain: "foodjournal-ca383.firebaseapp.com",
    databaseURL: "https://foodjournal-ca383-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "foodjournal-ca383",
    storageBucket: "asia-southeast1",
    messagingSenderId: "60453841329",
    appId: "1:60453841329:ios:fc8dc28872dd5fa218f590"
};
const app = initializeApp(firebaseConfig)
export {app}