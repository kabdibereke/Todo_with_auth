import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyB2XordPD3EI4e1PxqGvzN3L8x6x4XAT_0",
  authDomain: "todoapp-c34e6.firebaseapp.com",
  projectId: "todoapp-c34e6",
  storageBucket: "todoapp-c34e6.appspot.com",
  messagingSenderId: "21654142219",
  appId: "1:21654142219:web:8b84a86995b5afa1b9360e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app
