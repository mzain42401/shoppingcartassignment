// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrLdIatPP9mtCAFcsCkPHBUTAVFJ1Exwc",
  authDomain: "shopping-web-app-d8509.firebaseapp.com",
  projectId: "shopping-web-app-d8509",
  storageBucket: "shopping-web-app-d8509.appspot.com",
  messagingSenderId: "554818182684",
  appId: "1:554818182684:web:80f7a625900578df5749d9",
  databaseURL:"https://shopping-web-app-d8509-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
const myAuth = getAuth(app);

export default myAuth;