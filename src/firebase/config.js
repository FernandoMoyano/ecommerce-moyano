
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCye0_ocrqLDPdgKwKpatzheps2tdM1i0M",
  authDomain: "todotech-a792b.firebaseapp.com",
  projectId: "todotech-a792b",
  storageBucket: "todotech-a792b.appspot.com",
  messagingSenderId: "701731418270",
  appId: "1:701731418270:web:e95dd261af6f70ccd60b8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore=()=>app