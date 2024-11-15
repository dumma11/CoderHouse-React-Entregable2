import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyAsfcjO8bitFKkgMADgnkqU-Uj1p8DDZXw",
  authDomain: "barberstore-67749.firebaseapp.com",
  projectId: "barberstore-67749",
  storageBucket: "barberstore-67749.firebasestorage.app",
  messagingSenderId: "942553867949",
  appId: "1:942553867949:web:a9d38fb6f095b665edc824"
};

export const app = initializeApp(firebaseConfig)