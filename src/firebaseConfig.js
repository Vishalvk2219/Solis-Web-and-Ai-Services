import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyAK4DPTgOSahmNpgrkwK86f2vM9vGCNYBE",
    authDomain: "project222-a75bb.firebaseapp.com",
    databaseURL: "https://project222-a75bb-default-rtdb.firebaseio.com",
    projectId: "project222-a75bb",
    storageBucket: "project222-a75bb.firebasestorage.app",
    messagingSenderId: "78235286001",
    appId: "1:78235286001:web:99402c0a96913fe0942c50",
    measurementId: "G-0HK3HE6NE8"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);  // Initialize the Realtime Database
// Export the database instance
export { database};
