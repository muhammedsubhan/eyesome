import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9OiGqGJL4Si2cjJNdfuUmLDpG5e9qFpE",
  authDomain: "eyesome-ecom.firebaseapp.com",
  projectId: "eyesome-ecom",
  storageBucket: "eyesome-ecom.appspot.com",
  messagingSenderId: "656460116754",
  appId: "1:656460116754:web:18177889f7b97c911e39cb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
