import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBw22xE7872guYzV5FqMqyuvSQF_78oZyQ",
    authDomain: "react-authentication-6e1d8.firebaseapp.com",
    projectId: "react-authentication-6e1d8",
    storageBucket: "react-authentication-6e1d8.appspot.com",
    messagingSenderId: "1089262557374",
    appId: "1:1089262557374:web:8f78103e8d4443327866ef"
  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);