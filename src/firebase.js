import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebase = initializeApp(
  {
    apiKey: "AIzaSyCUJKF2qqSFb4cgDbxJCeZj_CkUAfxC-4s",
    authDomain: "fir-react-query.firebaseapp.com",
    projectId: "fir-react-query",
    storageBucket: "fir-react-query.appspot.com",
    messagingSenderId: "897175849722",
    appId: "1:897175849722:web:e33b43d2c99c4164089743",
    measurementId: "G-WJ4YRMYVEV",
  },
  "auth-basic"
);

export const auth = getAuth(firebase);
