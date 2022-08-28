import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDYxgL2IA0wDEMAbaCwu_QQhiLntcBbocg",
  authDomain: "todo-app-779cf.firebaseapp.com",
  projectId: "todo-app-779cf",
  storageBucket: "todo-app-779cf.appspot.com",
  messagingSenderId: "919678005911",
  appId: "1:919678005911:web:80aeffd55930251a96afd2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app
