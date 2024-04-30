
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDtOi38MBSiE0XU2e_NTh2QFaI-j2RmSg",
  authDomain: "tn-assignment.firebaseapp.com",
  projectId: "tn-assignment",
  storageBucket: "tn-assignment.appspot.com",
  messagingSenderId: "843085534379",
  appId: "1:843085534379:web:8702692007cf6310cbd3ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;