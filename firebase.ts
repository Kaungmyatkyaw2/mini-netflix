// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB11aYWmiv0_1Ienf1-eMYo5J2z0LUqWgo",
  authDomain: "netflix-clone-41dbc.firebaseapp.com",
  projectId: "netflix-clone-41dbc",
  storageBucket: "netflix-clone-41dbc.appspot.com",
  messagingSenderId: "37093632820",
  appId: "1:37093632820:web:727feff6d211f32ffc1361"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const auth = getAuth()

export default app;
export {auth,db}