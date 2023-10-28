// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "mern-estate-2.firebaseapp.com",
	projectId: "mern-estate-2",
	storageBucket: "mern-estate-2.appspot.com",
	messagingSenderId: "857594903069",
	appId: "1:857594903069:web:c00d42a82a7453b23ce4f4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
