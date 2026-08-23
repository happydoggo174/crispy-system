import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDdHwdRCA3Stdgl1Wku72fLru3AEBmBAEs",
    authDomain: "test-project-1-4b820.firebaseapp.com",
    projectId: "test-project-1-4b820",
    storageBucket: "test-project-1-4b820.firebasestorage.app",
    messagingSenderId: "806466404609",
    appId: "1:806466404609:web:78cf80b27668a2c5c75b00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app